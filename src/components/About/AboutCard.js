import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, my name is <span className="peach">Chirag Bansal </span> and
            I'm a <span className="peach">Software Developer</span> with a
            passion for learning and tackling new challenges. I'm particularly
            interested in the <span className="peach">Crypto Space </span>and
            I'm always looking to expand my knowledge in this exciting field. 
            <br />
            <br />
            In addition, I have experience as a{" "}
            <span className="peach">Machine learning </span>engineer and I'm
            constantly striving to improve my skills in this area as well. I've
            also had the privilege of serving as a mentor and judge for several
            <span className="peach"> Hackathons</span>, which has given me the
            opportunity to share my knowledge and expertise with others to reach
            their full potential. 
            <br />
            <br />
            Overall, I'm committed to continuous learning
            and growth, both as a developer and as an individual. When I'm not
            coding, you can usually find me reading about the latest tech trends
            or exploring the great outdoors.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "#f3bfa5" }}>
            "Developers are the architects of the digital world, building <br />{" "}
            the foundation upon which modern society is built.!"{" "}
          </p>
          <footer className="blockquote-footer">Chirag</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
