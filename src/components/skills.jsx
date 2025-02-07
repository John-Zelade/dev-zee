import React, { useEffect } from "react";
import { Container, Image, Col, Row } from "react-bootstrap";
import "../assets/skills.css";

const Skills = () => {
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
      applyAnimation(".animate-li", "in-view", "#skills");

      // Apply bounce animation to h2 tags
      applyAnimation("h2", "in-zoom", "#skills");

      // Apply bounce animation to html icon
      applyAnimation(".fa-html5", "in-zoom", "#skills");

      // Apply bounce animation to css icon
      applyAnimation(".fa-css3", "in-zoom", "#skills");

      // Apply bounce animation to js icon
      applyAnimation(".fa-js", "in-zoom", "#skills");

      // Apply bounce animation to js icon
      applyAnimation(".fa-react", "in-zoom", "#skills");

      // Apply bounce animation to css icon
      applyAnimation(".fa-node-js", "in-zoom", "#skills");

      // Apply bounce animation to js icon
      applyAnimation(".fa-php", "in-zoom", "#skills");

      // Apply bounce animation to js icon
      applyAnimation(".fa-database", "in-zoom", "#skills");

      // Apply bounce animation to js icon
      applyAnimation(".fa-laravel", "in-zoom", "#skills");

      // Apply bounce animation to js icon
      applyAnimation(".fa-bootstrap", "in-zoom", "#skills");

      // Apply bounce animation to js icon
      applyAnimation(".cloud-api", "in-zoom", "#skills");

       // Apply bounce animation to js icon
       applyAnimation(".fa-git-alt", "in-zoom", "#skills");

       // Apply bounce animation to js icon
       applyAnimation(".fa-github", "in-zoom", "#skills");
 
       // Apply bounce animation to js icon
       applyAnimation(".postman-icon", "in-zoom", "#skills");
 
       // Apply bounce animation to js icon
       applyAnimation(".vscode-icon", "in-zoom", "#skills");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div id="skills" className="m-2 mb-0 p-2">
        <div className="wrapper">
          <div className="text-center p-2">
            <h2>Tech Skills</h2>
          </div>

          <ol className="ps-0 mb-0">
            <div className="rocket"></div>
            <li className="rounded shadow-sm" style={{ "--accent-color": "#1163ff" }}>
              <div className="animate-li h-100">
                <div className="title p-1 rounded-top text-center">
                  Front-end Development
                </div>
                <Row className="content p-2 m-2">
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i
                      style={{ color: "#f06529" }}
                      className="text-center shadow-sm border fs-4 p-3 rounded-circle text- fa-brands fa-html5"
                    ></i>{" "}
                    <span className="text-center">HTML</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 p-3 rounded-circle text-primary fa-brands fa-css3"></i>{" "}
                    <span className="text-center">CSS</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 p-3 rounded-circle text-warning fa-brands fa-js"></i>{" "}
                    <span className="text-center">Javascript</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 p-3 rounded-circle text-primary fa-brands fa-react"></i>{" "}
                    <span className="text-center">ReactJS</span>
                  </Col>

                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 d-flex align-items-center justify-content-center rounded-circle text-primary fa-brands fa-bootstrap"></i>{" "}
                    <span className="text-center">Bootstrap</span>
                  </Col>
                </Row>
              </div>
            </li>

            <li className="rounded shadow-sm"  style={{ "--accent-color": "#D6489A" }}>
              <div className="animate-li h-100">
                <div className="title p-1 rounded-top text-center">
                  Back-end Development
                </div>
                <Row className="content p-2 m-2">
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 p-3 rounded-circle text-success fa-brands fa-node-js"></i>{" "}
                    <span className="text-center">NodeJS</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4  d-flex align-items-center justify-content-center rounded-circle text-primary fa-brands fa-php"></i>{" "}
                    <span className="text-center">PHP</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 p-3 rounded-circle text-danger fa-brands fa-laravel"></i>
                    <span className="text-center">Laravel</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 p-3 rounded-circle text-danger fa-solid fa-database"></i>{" "}
                    <span className="text-center">MySQL</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <div className="d-flex align-items-center justify-content-center cloud-api shadow-sm border rounded-circle">
                      <div className="position-relative fs-4">
                        <i className="text-center fs-4 text-danger fa-solid fa-cloud"></i>
                        <i className="fs-6 position-absolute top-0 end-0 mt-1 fa-solid fa-gear"></i>
                      </div>
                    </div>
                    <span className="text-center">Restful API</span>
                  </Col>
                </Row>
              </div>
            </li>

            <li className="rounded shadow-sm"  style={{ "--accent-color": "#ACD038" }}>
              <div className="animate-li h-100">
                <div className="title p-1 rounded-top text-center">
                  Tools and Technologies
                </div>
                <Row className="content p-2 m-2">
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i
                      style={{ color: "#f06529" }}
                      className="text-center shadow-sm border fs-4 p-3 rounded-circle text- fa-brands fa-git-alt"
                    ></i>{" "}
                    <span className="text-center">Git</span>
                  </Col>

                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <i className="text-center shadow-sm border fs-4 p-3 rounded-circle fa-brands fa-github"></i>{" "}
                    <span className="text-center">Github</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <div
                      style={{ color: "#f06529" }}
                      className="d-flex justify-content-center align-items-center shadow-sm border fs-4 rounded-circle postman-icon"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428c6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099m2.471 7.485a.86.86 0 0 0-.593.25l-4.453 4.453l-.307-.307l-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753m-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032a.06.06 0 0 1 .01-.073l.645-.645zm-2.803-.459l1.172-1.172l.879.878l-1.979.426a.074.074 0 0 1-.085-.039a.07.07 0 0 1 .013-.093m-3.646 6.058a.076.076 0 0 1-.069-.083a.1.1 0 0 1 .022-.046h.002l.946-.946l1.222 1.222zm2.425-1.256a.23.23 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934l-.294-.295l3.762-3.758l1.82-.393l.874.874c-1.255 1.102-2.971 2.201-5.1 3.268m5.279-3.428h-.002l-.839-.839l4.699-4.125a1 1 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091m3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.12.12 0 0 0 0 .169l1.247 1.247a1.82 1.82 0 0 1-2.093-.343m2.578 0a1.7 1.7 0 0 1-.271.218h-.001l-1.207-1.207l1.533-1.533c.661.72.637 1.832-.054 2.522m-.1-1.544a.14.14 0 0 0-.053.157a.42.42 0 0 1-.053.45a.14.14 0 0 0 .023.197a.14.14 0 0 0 .084.03a.14.14 0 0 0 .106-.05a.69.69 0 0 0 .087-.751a.14.14 0 0 0-.194-.033"
                        />
                      </svg>
                    </div>
                    <span className="text-center">Postman</span>
                  </Col>
                  <Col className="d-flex justify-content-center flex-column align-items-center p-1">
                    {" "}
                    <div className="d-flex justify-content-center align-items-center shadow-sm border fs-4 rounded-circle vscode-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.01em"
                        height="1em"
                        viewBox="0 0 256 254"
                      >
                        <defs>
                          <linearGradient
                            id="logosVisualStudioCode0"
                            x1="50%"
                            x2="50%"
                            y1="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#fff" />
                            <stop
                              offset="100%"
                              stopColor="#fff"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <path
                            id="logosVisualStudioCode1"
                            d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.94 15.94 0 0 0-9.025-14.363l-52.5-25.263a15.88 15.88 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.85 15.85 0 0 0 5.464 3.571m10.464-183.649l-76.262 57.889l76.262 57.888z"
                          />
                        </defs>
                        <mask id="logosVisualStudioCode2" fill="#fff">
                          <use href="#logosVisualStudioCode1" />
                        </mask>
                        <path
                          fill="#0065a9"
                          d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.94 15.94 0 0 0-9.024-14.36"
                          mask="url(#logosVisualStudioCode2)"
                        />
                        <path
                          fill="#007acc"
                          d="m246.135 226.816l-52.542 25.298a15.89 15.89 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.94 15.94 0 0 1-9.024 14.36"
                          mask="url(#logosVisualStudioCode2)"
                        />
                        <path
                          fill="#1f9cf0"
                          d="M193.428 252.134a15.89 15.89 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.89 15.89 0 0 1 18.125-3.084l52.533 25.263a15.94 15.94 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z"
                          mask="url(#logosVisualStudioCode2)"
                        />
                        <path
                          fill="url(#logosVisualStudioCode0)"
                          fillOpacity="0.25"
                          d="M180.828 252.605a15.87 15.87 0 0 0 12.65-.486l52.5-25.263a15.94 15.94 0 0 0 9.026-14.363V41.197a15.94 15.94 0 0 0-9.025-14.363L193.477 1.57a15.88 15.88 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.9 15.9 0 0 0 5.465 3.571m10.464-183.65l-76.262 57.89l76.262 57.888z"
                          mask="url(#logosVisualStudioCode2)"
                        />
                      </svg>
                    </div>
                    <span className="text-center">VS Code</span>
                  </Col>
                </Row>
              </div>
            </li>

            {/*<li style={{ "--accent-color": "#10BBC5" }}>
              <div className="animate-li rounded shadow-sm p-2">
                <div className="title">Data 04</div>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                </div>
              </div>
            </li>*/}
          </ol>
        </div>

        <svg style={{ display: "none" }}>
          <symbol id="rocket_svg" viewBox="0 0 134.13 196.24">
            <path
              fill="#ebebf0"
              d="M27.06,108.49S7,119.92,3.06,127.24c-5.62,10.5-4.12,48.75,9.75,69,0,0,7.13-32.63,23.63-45.75Z"
            />
            <path
              fill="#ebebf0"
              d="M107.06,108.49s20.08,11.43,24,18.75c5.63,10.5,4.13,48.75-9.75,69,0,0-7.12-32.63-23.62-45.75Z"
            />
            <path
              fill="#f37664"
              d="M67.07,0V176.24H38.3a136.69,136.69,0,0,1-6.58-12.37l-.18-.38c-19.42-41.52-15.83-86.71-.83-120,.18-.42.37-.84.56-1.25C40,23.51,52.26,8.65,66.08.56,66.4.37,66.73.18,67.07,0Z"
            />
            <path
              fill="#f4a391"
              d="M67.07,0V43.49H30.71c.18-.42.37-.84.56-1.25C40,23.51,52.26,8.65,66.08.56,66.4.37,66.73.18,67.07,0Z"
            />
            <path
              fill="#1d7dae"
              d="M67.07,163.49v12.75H38.3a136.69,136.69,0,0,1-6.58-12.37l-.18-.38Z"
            />
            <path
              fill="#f05b57"
              d="M103.42,43.49H67.07V0l1,.56c13.83,8.09,26.14,23,34.81,41.68C103.05,42.65,103.24,43.07,103.42,43.49Z"
            />
            <path
              fill="#e94733"
              d="M115.94,102.87a142.86,142.86,0,0,1-13.35,60.62H67.07v-120h36.35A145.76,145.76,0,0,1,115.94,102.87Z"
            />
            <path
              fill="#104c78"
              d="M102.59,163.49l-.18.38a136.69,136.69,0,0,1-6.58,12.37H67.07V163.49Z"
            />
            <circle fill="#e2554c" cx="67.06" cy="84.36" r="22.99" />
            <circle fill="#64cdf6" cx="67.06" cy="84.36" r="19.03" />
          </symbol>
        </svg>
      </div>
    </>
  );
};

export default Skills;
