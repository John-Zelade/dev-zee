import React, { useEffect, useState } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Dev from "../assets/images/3d-dev-img.webp";
import "../assets/home.css";

const Home = (props) => {
  const [imgLoading, setImgLoading] = useState(true);

  const handleImageLoading = () => {
    setImgLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Function to handle the scroll for a specific selector and class within a given scope
      const applyAnimation = (selector, className, scope) => {
        const scopeElement = document.querySelector(scope); // Get the scope element
        if (!scopeElement) return; // If scope element is not found, exit the function

        const elements = scopeElement.querySelectorAll(selector); // Get elements within the scope
        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        });
      };

      // Apply bounce animation to p tags
      applyAnimation("h2", "in-view-bounce", "#home");

      // Apply fade-up animation to h2 tags
      applyAnimation("p", "in-view-fade-up", "#home");

      // Apply fade-up animation to button tags
      applyAnimation("button", "in-view-fade-up", "#home");

      // Apply fade-up animation to button element.
      applyAnimation(".button", "in-view-fade-up", "#home");

      // Apply fade-up animation to button element.
      applyAnimation(".image-dev", "in-zoom", "#home");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // this will handle cv download.
  const handleDownloadCV = () => {
    window.open("/cv.pdf", "_blank");
  };
  return (
    <>
      <div id="home" className="pb-3">
        <Row className="pb-5 ps-2 me-0 ms-0">
          <Col
            className="d-flex justify-content-center mt-4 pt-4 mb-4 pe-0"
            md="6"
          >
            <div className="d-flex justify-content-center flex-column mt-2 pt-3">
              <div className="text-container d-flex flex-column p-0">
                <h2 className="fw-bold text-center">
                  Hello! I am{" "}
                  <span className="text-primary fw-bold">John Zelade Higo</span>
                </h2>
                <p className="fs-5 text-center">
                  An aspiring full-stack web developer passionate
                  <br />
                  about creating web applications.
                </p>
              </div>
              <div className="d-flex justify-content-center gap-4 m-3">
                <div className="contact-container d-flex align-items-center">
                  <button className="p-1 pe-2 ps-2  border-bottom border-2 rounded">
                    <a href="#contact">
                      <span>Contact Me</span>
                    </a>
                  </button>
                </div>

                <div className="button border-bottom border-2">
                  <div onClick={handleDownloadCV} className="button-wrapper">
                    <div className="text">Download CV</div>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        width="2em"
                        height="2em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex align-items-center" md="6">
            {/* Image Placeholder */}
            {imgLoading && (
              <div className="image-dev img-load img-fluid"></div> // Placeholder for loading
            )}

            {/* Actual Image */}
            <Image
              src={`${Dev}?${new Date().getTime()}`}
              className={`image-dev img-fluid ${
                imgLoading ? "img-load" : "in-zoom"
              }`}
              loading="lazy"
              onLoad={handleImageLoading}
              alt="Developer"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
