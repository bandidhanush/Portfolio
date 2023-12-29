import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhanush Bandi </span>
            from <span className="purple"> Banglore, India.</span>
            <br />I am a junior pursuing Bachelors in Computer Applications (<span className="purple">BCA</span>) in Dayananda Sagar University, Bangalore
            <br />
            <br />
            Aside from coding, I've got a few other tricks up my sleeve, 
            and by tricks, I mean activities that make me as happy as a bug🐛 in code
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 🎸 coz melodies speak louder than words.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Training My Pet Dog, Just like training an AI model😜
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Travelling because getting lost sometimes leads to the     most beautiful adventures🌐🗺️ in life.
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Playing PlayStation 🎮 because defeating virtual foes is     my kind of debugging. 🕹️💾
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "To know the Depth of sea first learn to Swim just like Logic for Tech"{" "}
          </p>
          <footer className="blockquote-footer" style={{textAlign:'right'}}>Dhanush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
