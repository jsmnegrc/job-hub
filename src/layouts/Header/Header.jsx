import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-nav">
      <Container className="p-2">
        <Navbar.Brand className="text-light fw-bold" as={Link} to="/">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/book">
              Book
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button className="btn btn-warning fw-semibold me-2">Login</Button>
          <Button className="btn btn-warning fw-semibold">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
