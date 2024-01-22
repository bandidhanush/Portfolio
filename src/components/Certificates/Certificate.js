import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import CNPL from "../../Assets/Certificates/CNPL.png";
import Debate from "../../Assets/Certificates/Debate.jpg";
import TalentBattle from "../../Assets/Certificates/TalentBattle.png";
import RapidMiner from "../../Assets/Certificates/RapidMiner.png";


function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Certificates I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <CertificateCards
              imgPath={CNPL}
              isBlog={false}
              title="Coding Ninjas"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
            />
          </Col> */}
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={TalentBattle}
              isBlog={false}
              title="Talent Battle"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCards
              imgPath={RapidMiner}
              isBlog={false}
              title="Rapid Miner" 
            />
          </Col>
          

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink=""
              demoLink=""              
            />
          </Col>*/}
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
            <CertificateCards
              imgPath={CNPL}
              isBlog={false}
              title="Coding Ninjas"
            />
            </Col>
            <Col md={4} className="project-card">
            <CertificateCards
              imgPath={Debate}
              isBlog={false}
              title="College Debates"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;
