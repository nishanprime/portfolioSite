import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { modalPopActionLogin } from "../actions/showModalPopupLoginAction";
const Header = () => {
  const dispatch = useDispatch();

  const modalHandler = () => {
    console.log("I am in")
    dispatch(modalPopActionLogin(true));
   
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
                <Button className="btn btn-sm" variant="warning">
                  Resume Download
                </Button>
                <Button className="btn btn-sm" onClick={modalHandler}>
                  Admin SignIn
                </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
