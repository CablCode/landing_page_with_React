import React from "react";
import { Navbar, Nav} from "react-bootstrap";

function NavbarFront() {
  return (
    <div>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <Nav.Link href="#test">Test</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      
    </div>
  );
}

export default NavbarFront;