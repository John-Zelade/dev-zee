import React from "react";
import { Container, Image, Col, Row, Button, Form } from "react-bootstrap";
import "../assets/contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact" className="bg-dark position-relative">
        <div className="position-absolute bottom-0 end-0">
          <Button
            className="rounded-circle"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="fa-solid fa-angle-up"></i>
          </Button>
        </div>
        <Row>
          <Col md="6" xs="12">
            <div className="mx-auto p-5">
              {/* Get in Touch Section */}
              <div>
                <h3 className="text-lg text-light font-semibold">
                  Get in Touch
                </h3>
                <p className="mt-2 text-light">
                  I'm always open to new opportunities and collaborations. Let's
                  connect!
                </p>
              </div>

              {/* Contact & Social Links */}

              <div className="card-social-links rounded">
                <a
                  className="socialContainer containerOne"
                  href="https://github.com/John-Zelade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="socialSvg instagramSvg"
                  >
                    <path
                      fill="white"
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </a>

                <a
                  className="socialContainer containerTwo"
                  href="https://web.facebook.com/johnzeleyd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="socialSvg twitterSvg"
                  >
                    <path
                      fill="white"
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                    />
                  </svg>
                </a>

                <a
                  className="socialContainer containerThree"
                  href="https://www.linkedin.com/in/john-zelade-higo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>

                <a
                  className="socialContainer containerFour"
                  href="mailto:johnzeladehigo@gmail.com"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="socialSvg whatsappSvg"
                  >
                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"></path>
                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
