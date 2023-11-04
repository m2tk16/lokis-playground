import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Loki from "./images/loki-head.png";

function NavBar() {
  return (
    <Navbar 
      collapseOnSelect 
      expand="sm" 
      className="navbar"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href={"/"}>
            <img className="loki" src={Loki} alt="amzn-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-link">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/food">Food</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/toys">Toys</Nav.Link>
            <Nav.Link href="/training">Training</Nav.Link>
            <Nav.Link href="/leads">Leads</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;