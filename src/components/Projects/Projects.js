import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import realtimeverification from "../../Assets/Projects/verification.png";
import theputon from "../../Assets/Projects/theputon.png";
import leaf from "../../Assets/Projects/plantify.png";
import facedetection from "../../Assets/Projects/facedetection.png";
import svasth from "../../Assets/Projects/svasth.png";
import chlogs from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="peach">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realtimeverification}
              isBlog={false}
              title="RealTime Video Verification"
              description="'RealTime Video Verification' is a full stack project that aims to provide real-time verification of users through video streaming. The project uses TensorFlow Object Detection, which is trained on a self-created dataset, to detect the face and ID card of the user. The model is converted into TensorFlow.js and integrated with the front-end built using React.js. The TF.js model is also hosted on IBM cloud for scalability and availability. The project enables real-time verification of users, improving security measures and providing a more efficient user experience."
              ghLink="https://github.com/ChiragB254/RealTime-Video-Verification"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chlogs}
              isBlog={false}
              title="My Ch-logs"
              description="'My Ch-logs' is a personal blogging website built using Next.js and Tailwind CSS. The website allows users to write blog posts in markdown format and publishes them on the website. The website also supports dark mode for ease of reading at night. The main technologies used in the project are Next.js for server-side rendering, Tailwind CSS for styling, and Markdown for blog post content."
              ghLink="https://github.com/ChiragB254/My-Ch-logs"
              demoLink="https://ch-logs.theputon.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={svasth}
              isBlog={false}
              title="Svasth"
              description="'Savasth' is a full-stack web application built using Django framework that provides a simple and convenient way to detect brain tumor by uploading MRI images. The application uses machine learning algorithms and computer vision techniques to process the MRI images and identify the presence of a tumor. The web application provides an easy-to-use interface for the users to upload their MRI images and get the results. It also provides visualization of the processed images and tumor detection results. The application aims to provide a reliable and efficient way to detect brain tumors, which is crucial for early diagnosis and treatment."
              ghLink="https://github.com/ChiragB254/svasth/tree/1bc6a2d2c4b816ac43af6f47382c579aff011d57/svasth"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Leaf Lamentations: A Study of Foiler Diseases in Apples"
              description="'Foiler Diseases in Apple Leaf' is a deep learning-based project aimed at detecting diseases in apple leaves at an early stage. The project utilizes a deep learning model that has been trained on over 10,000 images of 4 different classes, resulting in an accuracy of 90%. The model uses a convolutional neural network (CNN) to analyze images of apple leaves and classify them as healthy or diseased. Early detection of diseases in apple trees is crucial to prevent significant losses in apple production. The Foiler Diseases in Apple Leaf project provides a quick and accurate method for detecting diseases in apple trees, allowing farmers to take timely and effective measures to protect their crops."
              ghLink="https://github.com/ChiragB254/Foiler-Diseases-in-Apple-Leaf"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={theputon}
              isBlog={false}
              title="ThePutOn"
              description="'ThePutOn' is an e-commerce website developed on the WordPress platform using no-code tools. The website features an integrated payment gateway and delivery service. Customers can browse and purchase a variety of products, including clothing, accessories, and shoes. The website is designed to be user-friendly and easy to navigate, with a clean and modern design. Overall, ThePutOn provides a convenient and hassle-free shopping experience for customers looking to buy fashion products online."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://theputon.com"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facedetection}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/ChiragB254/Face_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
