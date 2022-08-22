import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "../styles/Navbar.css";

function Navigation() {
  return (
    // <h1>This is working</h1>
    <Navbar collapseOnSelect expand="lg" variant="light" id="navbar">
      <Navbar.Brand href="#home">home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#projects">projects</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#contact">contact</Nav.Link>
          <Nav.Link href="#resume">resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
