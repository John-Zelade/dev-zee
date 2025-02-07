import React, { useEffect } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../assets/about.css";

const About = () => {
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
          }
        });
      };
      // Apply bounce animation to p tags
      applyAnimation("h2", "in-zoom", "#about");

      // Apply bounce animation to p tags
      applyAnimation("h4", "fade-up", "#about");

      // Apply bounce animation to p tags
      applyAnimation("p", "in-toLeft", "#about");

      // Apply bounce animation to p tags
      applyAnimation(".fa-code", "fade-up", "#about");

      // Apply bounce animation to p tags
      applyAnimation(".fa-headphones", "fade-up", "#about");

      // Apply bounce animation to p tags
      applyAnimation(".fa-mug-hot", "fade-up", "#about");

      // Apply bounce animation to p tags
      applyAnimation(".fa-gamepad", "fade-up", "#about");

      // Apply bounce animation to p tags
      applyAnimation(".fa-clapperboard", "fade-up", "#about");

      // Apply bounce animation to p tags
      applyAnimation("span", "in-zoom", "#about");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div id="about" className="">
        <div className="title">
          <h2 className="text-center p-3 mb-0">About Me</h2>
        </div>

        <Row className="ms-0 me-0 overflow-hidden">
          <Col className="p-3" md="6">
            <h4 className="text-center">My Interest</h4>
            <Row className="p-2 m-2 gap-3">
              <Col className="d-flex justify-content-center flex-column shadow-sm rounded-2 align-items-center p-1">
                <i className="text-center fs-4 p-3 fa-solid fa-code"></i>
                <span className="text-center">Coding</span>
              </Col>
              <Col className="d-flex justify-content-center flex-column shadow-sm rounded-2 align-items-center p-1">
                <i className="text-center fs-4 p-3 fa-solid fa-headphones"></i>
                <span className="text-center">Music</span>
              </Col>
              <Col className="d-flex justify-content-center flex-column shadow-sm rounded-2 align-items-center p-1">
                <i className="text-center fs-4 p-3 fa-solid fa-mug-hot"></i>
                <span className="text-center">Coffee</span>
              </Col>
              <Col className="d-flex justify-content-center flex-column shadow-sm rounded-2 align-items-center p-1">
                <i className="text-center fs-4 p-3 fa-solid fa-gamepad"></i>
                <span className="text-center">Gaming</span>
              </Col>
              <Col className="d-flex justify-content-center flex-column shadow-sm rounded-2 align-items-center p-1">
                <i className="text-center fs-4 p-3 fa-solid fa-clapperboard"></i>
                <span className="text-center">Movies</span>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex justify-content-center flex-column p-4" md="6">
            <p>
              I'm a web developer specializing in building interactive front-end
              and back-end web applications. I offer custom web development
              services, including responsive UI design, API development, and
              database management. My full-stack expertise ensures seamless
              integration between user interfaces and server-side logic.
            </p>
            <p>
              Continuously enhancing my skills, I stay updated with the latest
              web technologies to deliver efficient and scalable solutions.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
