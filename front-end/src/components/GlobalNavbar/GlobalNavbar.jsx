import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function BoldText({ children }) {
  return (
    <span style={{  fontSize: '15px', color: 'black', font: 'Courier-Oblique', fontWeight: 400  }}>{children}</span>
  );
}

const GlobalNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg"
    style= {{backgroundColor: 'lightsalmon'}}>
      <Container>
        <Navbar.Brand href="/">GeoJobs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/"><BoldText>Home</BoldText></Nav.Link>
            <Nav.Link href="/about"><BoldText>About</BoldText></Nav.Link>
            <Nav.Link href="/jobs"><BoldText>Jobs</BoldText></Nav.Link>
            <Nav.Link href="/cities"><BoldText>Cities</BoldText></Nav.Link>
            <Nav.Link href="/apartments"><BoldText>Apartments</BoldText></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlobalNavbar;
