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
          2022
        </div>

        <h2 style={{ textAlign: "left" }}>Machine Learning Intern</h2>
        <div class="position" style={{ textAlign: "left" }}>
          National Informatics Center Haryana, Chandigarh
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          As a <b className="peach">Machine learning Intern</b> at the{" "}
          <b className="peach">National Informatics Center</b>, I developed a
          system to detect skin cancer using a{" "}
          <b className="peach">Deep Learning Algorithm</b>. The system was
          trained on a dataset of over 100,000 images of{" "}
          <b className="peach">skin lesions</b>, and was able to achieve an
          accuracy of over 90% in detecting <b className="peach">skin cancer</b>
          . This system has the potential to improve early{" "}
          <b className="peach">detection of skin cancer</b> and{" "}
          <b className="peach">save lives</b>.
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2021
        </div>

        <h2 style={{ textAlign: "left" }}>Student Mentor And Speaker</h2>
        <div class="position" style={{ textAlign: "left" }}>
          CodeAsylums, India
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          I was a <b className="peach">Student mentor </b>and{" "}
          <b className="peach">Speaker </b>at{" "}
          <b className="peach">CodeAsylums</b>, where I teach students about
          machine learning and give sessions at different colleges to help
          students get on the right path. I am{" "}
          <b className="peach">passionate about helping students</b> to learn
          and grow, and I believe that everyone has the potential to succeed in{" "}
          <b className="peach">machine learning</b>. I am excited to continue
          working with students and helping them reach their full potential.
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2020
        </div>

        <h2 style={{ textAlign: "left" }}>Research Intern</h2>
        <div class="position" style={{ textAlign: "left" }}>
          Infowiz <b>A</b> Software Solutions, Mohali, Punjab
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          Infowiz is a North India based startup which delivers softwares to its
          clients. Throughout my tenure, I worked on{" "}
          <b className="peach">object detection </b> using computer vision and
          designed an AI based <b className="peach">computer vision </b> system
          powered using <b className="peach">Rasperry Pi </b> and a camera.
        </div>
      </Col>
    </Row>
  );
}

export default EducationDetail;
