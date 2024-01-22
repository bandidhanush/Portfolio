import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import handwriter from "../../Assets/Projects/handwriter.png";
import A from "../../Assets/Projects/A.jpg";
import Fan from "../../Assets/Projects/Fan.jpg";
import Music from "../../Assets/Projects/Music.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={A}
              isBlog={false}
              title="Accident Alert System"
              description="The Accident Alert System employs a Vibration Sensor and GSM technology to swiftly respond to accidents. Triggered by sudden impacts, the system utilizes a GSM module to send an SMS with location details and initiates a call to predefined emergency contacts. Integrated GPS ensures accurate location information. This comprehensive approach aims to expedite assistance, enhancing overall safety by providing timely and automated alerts in the event of an accident."
              ghLink="https://github.com/bandidhanush/AccidentDetectionSystem"
              demoLink="https://youtu.be/CVNS_eiHaUg"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwriter}
              isBlog={false}
              title="Realistic Handwriter"
              description="The Realistic Handwriter project is a Python-based application that simulates realistic handwriting using computer-generated fonts. The program allows users to input text, select handwriting styles, and generate visually appealing handwritten outputs. It employs advanced algorithms to replicate the natural variations and nuances found in human handwriting, providing a personalized touch to digital text."
              ghLink="https://github.com/bandidhanush/realistic-handwriter.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Fan}
              isBlog={false}
              title="Automatic Fan Speed Contoler Using Temperature Sensor"
              description="The Automatic Fan Speed Controller utilizes a Temperature Sensor for smart fan speed regulation. Monitoring ambient temperature, a microcontroller adjusts the fan speed, increasing it in warmer conditions for comfort and decreasing it in cooler temperatures for energy efficiency. This system optimizes climate control, providing an automated and energy-conscious solution for maintaining a comfortable environment, while also contributing to sustainable and eco-friendly living."
              ghLink="https://github.com/bandidhanush/AutomaticFanSpeedController"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Custom Music Player Using Java"
              description="The Custom Music Player, created using Java, serves as a foundational project for learning the Java language. Designed as a basic music player, it allows users to explore fundamental Java concepts while gaining hands-on experience in application development. The project focuses on essential functionalities such as playlist customization and basic playback controls, providing an accessible and educational platform for those seeking to build their skills in Java programming."
              ghLink="https://github.com/bandidhanush/MyMusicPlayer"
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
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink=""
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
