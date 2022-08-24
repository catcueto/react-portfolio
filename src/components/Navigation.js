import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import icon from "../imgs/navbar-icon.svg";

import "../styles/Navbar.css";

function Navigation() {
  return (
    // <h1>This is working</h1>
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      id="navbar"
      className="fixed"
    >
      <Navbar.Brand href="#home">
        <img src={icon} alt="logo" id="nav-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#projects">projects</Nav.Link>
          <Nav.Link href="#skills">skills</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#contact">contact</Nav.Link>
          <Nav.Link
            href="https://drive.google.com/file/d/1b3DGy8T0wnLxi38ifFvr2eTXnz3ZkqhZ/view?usp=sharing"
            target="_blank"
          >
            resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
