import React, { Component } from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="navBar-Container">
          <Navbar.Brand className="sfLogo" href="/">
            <img
              src="/SanitationFoundationLogo.png"
              width="170vw"
              height="70vh"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown
              className="navLink"
              title="who we are"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">mission</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                staff & board action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">press</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">careers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">contact us</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="navLink"
              title="what we do"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                refashion week
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                follow your waste
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                zero waste academy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">workshops</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                food waste toolkit
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                food waste fair
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">museum</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
                dsny art show
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="navLink"
              title="give"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                corporate membership
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">our donors</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                covid-19 fund
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">donate</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="navLink"
              title="get involved"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">attend</NavDropdown.Item>
              <NavDropdown.Item href="/form">
              volunteer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">partner</NavDropdown.Item>
            </NavDropdown>
            <Button>Donate</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
