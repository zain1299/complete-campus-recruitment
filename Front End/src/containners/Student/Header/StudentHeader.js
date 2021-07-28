import React from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function StudentHeader() {
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
          <Navbar.Brand as={Link} to="/companies">
            Campus Recruitment System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/companies">
                Companies
              </Nav.Link>
              <Nav.Link as={Link} to="/all-jobs">
                All Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/applied-jobs">
                Applied Jobs
              </Nav.Link>
              <Nav.Link as={Link} to="/student-profile">
                Profile
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-dark" style={{ marginLeft: "30px" }}>
                Logout
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default StudentHeader;
