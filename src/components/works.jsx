import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Col,
  Row,
  Carousel,
  Card,
  Button,
} from "react-bootstrap";

//SRAM Project Images
import sram from "../assets/images/projects/SRAM/SRAM.png";
import SramDashboardAdmin from "../assets/images/projects/SRAM/Admin-Dashboard.png";
import SramApplications from "../assets/images/projects/SRAM/Applications.png";
import SramDashboard from "../assets/images/projects/SRAM/SRAM-Dashboard.png";
import SramApplication from "../assets/images/projects/SRAM/Application.png";

//Synctasks Project Images
import synctasks from "../assets/images/projects/SyncTasks/User-Login.png";
import synctasksAdminManageTaskTab from "../assets/images/projects/SyncTasks/Admin-Manage-Task_Tab.png";
import synctasksAdminDashboard from "../assets/images/projects/SyncTasks/Admin-Dashboard.png";
import synctasksAdminManageUserTab from "../assets/images/projects/SyncTasks/Admin-Manage-User_Tab.png";
import synctasksAssignTask from "../assets/images/projects/SyncTasks/Assign Task.png";
import synctasksUserProjectTab from "../assets/images/projects/SyncTasks/User-Project-Tab.png";

//SIS Project Images
import SISLogin from "../assets/images/projects/SIS/SIS-Student-Login.png";
import SISPersonalStudentData from "../assets/images/projects/SIS/SIS-Personal-Student-Data.png";
import SISFaculty from "../assets/images/projects/SIS/SIS-Faculty.png";
import SISEnrollAdmittedStudent from "../assets/images/projects/SIS/SIS-Enroll-Admitted-Student.png";
import SISDashboard from "../assets/images/projects/SIS/SIS-Dashboard.png";
import SISClasses from "../assets/images/projects/SIS/SIS-Classes.png";
import SISAdvisoryClass from "../assets/images/projects/SIS/SIS-Advisory-Class.png";

const Works = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div id="works" className="shadow-sm">
        <div className="title">
          <h2 className="text-center p-3 mb-0">Works | Projects</h2>
        </div>
        <Container className="p-3 mb-3">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {/**==========================SLIDE 1 - SRAM===============================**/}
            <Carousel.Item className="pb-5">
              <div className="d-flex justify-content-center">
                <Row>
                  <Col xs="12" md="4">
                    <Row className="d-flex align-items-start  justify-content-center">
                      <Card className="p-0" style={{ width: "22rem" }}>
                        <Card.Img variant="top" src={sram} />
                        <Card.Body>
                          <Card.Title className="fs-6 text-center">
                            Student Registration and Admission Management System
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                  <Col xs="12" md="8">
                    <Row className="d-flex justify-content-center gap-2 m-0">
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SramDashboardAdmin} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SramApplications} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SramDashboard} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SramApplication} />
                      </Card>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>

            {/**==========================SLIDE 2 - SyncTasks===============================**/}
            <Carousel.Item className="pb-5">
              <div className="d-flex justify-content-center">
                <Row>
                  <Col xs="12" md="4">
                    <Row className="d-flex align-items-start  justify-content-center">
                      <Card className="p-0" style={{ width: "22rem" }}>
                        <Card.Img variant="top" src={synctasks} />
                        <Card.Body>
                          <Card.Title className="fs-6 text-center">
                            <a
                              href="https://youtu.be/SK3d9vU0XWQ?si=C5eFqGlVtoZRkj1T"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              SyncTasks: Project | Task Management System
                            </a>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                  <Col xs="12" md="8">
                    <Row className="d-flex align-items-start  justify-content-center  gap-2 m-0">
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={synctasksAdminDashboard} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img
                          variant="top"
                          src={synctasksAdminManageTaskTab}
                        />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img
                          variant="top"
                          src={synctasksAdminManageUserTab}
                        />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={synctasksAssignTask} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={synctasksUserProjectTab} />
                      </Card>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>

            {/**==========================SLIDE 3 - BHNHS-SIS===============================**/}
            <Carousel.Item className="pb-5">
              <div className="d-flex justify-content-center">
                <Row>
                  <Col xs="12" md="4">
                    <Row className="d-flex align-items-start  justify-content-center">
                      <Card className="p-0" style={{ width: "22rem" }}>
                        <Card.Img variant="top" src={SISLogin} />
                        <Card.Body>
                          <Card.Title className="fs-6 text-center">
                            <a
                              href="https://youtu.be/g-8HQludxoA"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              BHNHS-Student Information System
                            </a>
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Row>
                  </Col>
                  <Col xs="12" md="8">
                    <Row className="d-flex align-items-start  justify-content-center gap-2 m-0">
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SISDashboard} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SISAdvisoryClass} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SISClasses} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img
                          variant="top"
                          src={SISEnrollAdmittedStudent}
                        />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SISFaculty} />
                      </Card>
                      <Card className="p-0" style={{ width: "10rem" }}>
                        <Card.Img variant="top" src={SISPersonalStudentData} />
                      </Card>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
};

export default Works;
