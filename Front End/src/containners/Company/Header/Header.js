import React, { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostJob from "../PostJob";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="light"
        bg="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/vacancies">
            Campus Recruitment System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/vacancies">
                Vacancies
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="info" onClick={handleShow}>
                Post Job
              </Button>
              <Button variant="outline-dark" style={{ marginLeft: "30px" }}>
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PostJob show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  );
}

export default Header;
