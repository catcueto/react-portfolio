import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      id="navbar"
    >
      <Container>
        <Navbar.Brand href="#home">HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">PROJECTS</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <Nav.Link href="#resume">RESUME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar;
