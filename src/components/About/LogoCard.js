import React from "react";
import { Col, Row } from "react-bootstrap";
import nic from "../../Assets/About_Logos/NIC.png";
import hsvp from "../../Assets/About_Logos/hsvp.png";
import ca from "../../Assets/About_Logos/ca.png";
import google from "../../Assets/About_Logos/google.png";


function LogoCard() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={nic} alt="NIC Image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={hsvp} alt="HSVP Image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ca} alt="My Image" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={google} alt="My Image" />
      </Col>
    </Row>
  );
}

export default LogoCard;
