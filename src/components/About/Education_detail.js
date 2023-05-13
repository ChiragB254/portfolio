import React from "react";
import { Col, Row } from "react-bootstrap";


function EducationDetail() {
	return (
    <Row
      className="resume-wrap"
      style={{ justifyContent: "left", paddingBottom: "50px" }}
    >
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2018-2022
        </div>

        <h2 style={{ textAlign: "left" }}>
          B.Tech in Computer Science and Engineering
        </h2>
        <div class="position" style={{ textAlign: "left" }}>
          Punjabi University
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          Cum.GPA : 8.12/10
        </div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
			<img src={hsvp} alt="HSVP Image" />
		</Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
			<img src={ca} alt="My Image" />
		</Col>
		<Col xs={4} md={2} className="tech-icons">
			<img src={google} alt="My Image" />
		</Col> */}
    </Row>
  );
}

export default EducationDetail;