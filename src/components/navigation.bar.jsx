import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../assets/navigation-bar.css";

const NavigationBar = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    props.setDarkMode(!props.darkmode);
  };

  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold">
              <span className="bg-primary text-white">Dev</span>ZEE
            </Navbar.Brand>

            {/**** "shadow-none" -remove onclicked border. ****/}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0 shadow-none"
            />

            <Navbar.Collapse
              className="position-relative"
              id="basic-navbar-nav"
            >
              {/*****************Navigation Links*****************/}

              <Nav className="ms-auto me-auto gap-3">
                <Nav.Link
                  className={
                    props.darkmode && isChecked
                      ? "ms-auto me-auto text-white"
                      : "ms-auto me-auto"
                  }
                  href="#home"
                >
                  Home
                </Nav.Link>
                <Nav.Link  className={
                    props.darkmode && isChecked
                      ? "ms-auto me-auto text-white"
                      : "ms-auto me-auto"
                  } href="#about">
                  About
                </Nav.Link>
                <Nav.Link  className={
                    props.darkmode && isChecked
                      ? "ms-auto me-auto text-white"
                      : "ms-auto me-auto"
                  } href="#skills">
                  Skills
                </Nav.Link>
                <Nav.Link  className={
                    props.darkmode && isChecked
                      ? "ms-auto me-auto text-white"
                      : "ms-auto me-auto"
                  } href="#works">
                  Works
                </Nav.Link>
                <Nav.Link  className={
                    props.darkmode && isChecked
                      ? "ms-auto me-auto text-white"
                      : "ms-auto me-auto"
                  } href="#contact">
                  Contact
                </Nav.Link>
              </Nav>
              {/*** Darkmode Toggle button ***/}
              <div className="position-absolute w-100 top-0">
                <div className="position-absolute end-0 me-2 mt-2">
                  <label className="ui-switch">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <div className="slider">
                      <div className="circle"></div>
                    </div>
                  </label>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
