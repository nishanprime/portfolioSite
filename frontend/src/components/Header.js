import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  const [show, setShow] = useState(false);

  const modalHandler = () => {
    setShow(!show);
  };
  return (
    <header>
      <Container>
        <Navbar
          class="navBar"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <LinkContainer to="/">
            <Navbar.Brand style={{ marginLeft: "10px" }}>Nishan</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ marginLeft: "auto", marginRight: "10px" }}>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#skillsSection">Skills</Nav.Link>
              <Nav.Link href="#contactSection">Contact</Nav.Link>
              <LinkContainer to="#resume_download">
                <Button className="btn btn-sm" variant="warning">
                  Resume Download
                </Button>
              </LinkContainer>
              <LinkContainer to="#resume_download">
                <Button className="btn btn-sm" onClick={modalHandler}>
                  Admin SignIn
                </Button>
                {/* <Modal show={true} onHide={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal> */}
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
