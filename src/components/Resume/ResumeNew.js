import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Chirag_Bansal_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/file/d/1Hq4sKKEpyF8ScFK933SsyJZSJKoSYobU/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setWidth(window.innerWidth);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Container fluid className="resume-section">
        <Particle />
        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 768 ? 1.5 : 0.8}
              className="pdf-page"
            />
          </Document>
        </Row>

        <Row
          className="resume-controls"
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Col xs={12} md={6}>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row style={{ justifyContent: "center", position: "relative" }}>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  type="submit"
                  onClick={previousPage}
                  disabled={pageNumber <= 1}
                >
                  Previous
                </Button>
                <p style={{ margin: "0 1rem" }}>
                  Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                  {numPages || "--"}
                </p>
                <Button
                  type="submit"
                  onClick={nextPage}
                  disabled={pageNumber >= numPages}
                >
                  Next
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ResumeNew;
