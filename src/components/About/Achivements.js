import React from "react";
import { Col, Row } from "react-bootstrap";

import { ImBookmark } from "react-icons/im";

function EducationDetail() {
  return (
    <Row
      className="resume-wrap"
      style={{ justifyContent: "left", paddingBottom: "50px" }}
    >
      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2020 - 2022
        </div>

        <h2 style={{ textAlign: "left" }}>Community Growth Head</h2>

        <div class="position" style={{ textAlign: "left" }}>
          CodeAsylums
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          As the <b className="peach">Community Growth Head </b>at{" "}
          <b className="peach">CodeAsylums</b>, I am responsible for{" "}
          <b className="peach">growing </b>and{" "}
          <b className="peach">engaging </b>our community of learners. I do this
          by creating and executing{" "}
          <b className="peach">community-building initiatives</b>, such as
          hackathons, meetups, and online forums. I also work to promote our
          community to new learners through{" "}
          <b className="peach">social media and outreach </b>efforts. I am
          passionate about creating a welcoming and supportive learning
          environment for everyone, and I am excited to continue growing our
          community.
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2020 - 2022
        </div>

        <h2 style={{ textAlign: "left" }}>CodeChef PUP Chapter</h2>

        <div class="position" style={{ textAlign: "left" }}>
          Punjabi University
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          As the <b className="peach">Community Growth Head </b>at{" "}
          <b className="peach">CodeAsylums</b>, I am responsible for{" "}
          <b className="peach">growing </b>and{" "}
          <b className="peach">engaging </b>our community of learners. I do this
          by creating and executing{" "}
          <b className="peach">community-building initiatives</b>, such as
          hackathons, meetups, and online forums. I also work to promote our
          community to new learners through{" "}
          <b className="peach">social media and outreach </b>efforts. I am
          passionate about creating a welcoming and supportive learning
          environment for everyone, and I am excited to continue growing our
          community.
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2021
        </div>

        <h2 style={{ textAlign: "left" }}>Community Manager</h2>

        <div class="position" style={{ textAlign: "left" }}>
          Sidepath Community
        </div>
        <div className="CGPA" style={{ textAlign: "left" }}>
          As the Community Manager at Sidepath Community, I am responsible for
          the overall health and well-being of our community. I do this by
          creating and maintaining a welcoming and supportive environment,
          engaging with members, and resolving any issues that may arise. I am
          passionate about creating a community where people can come together
          to learn, share, and grow.
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons" style={{ width: "100%" }}>
        <div className="date" style={{ textAlign: "left" }}>
          2020 - 2023
        </div>

        <h2 style={{ textAlign: "left" }}>MentorShip/ Speaker</h2>

        <div className="CGPA" style={{ textAlign: "left" }}>
          <ul>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at NASA International Space App Challange Pune
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at Data Inverse Hack
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at Hack the Mountain
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at AmiHacks
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at Hack with CW
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at NBSE Hack 2021
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at Hack Overflow
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at Hack the Mountain 2.0
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at HackNUthon 3.0
            </li>
            <li className="about-activity">
              <ImBookmark />
              &nbsp; Mentor at HackNUthon 4.0
            </li>
            <li className="about-activity">
              <b className="peach">
                <ImBookmark />
                &nbsp; And Many More
              </b>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default EducationDetail;
