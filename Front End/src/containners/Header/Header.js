import React, { useState } from "react";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../redux/Users/userActions";
import PostJob from "../Company/PostJob";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const auth = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };

  const renderAdminLoggedInLinks = () => {
    return (
      <div style={{ display: "flex" }}>
        <Nav.Link as={Link} to="/">
          Vacancies
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>

        <Form className="d-flex">
          <Button
            style={{ marginLeft: "32rem" }}
            variant="info"
            onClick={handleShow}
          >
            Post Job
          </Button>
          <Button
            variant="outline-dark"
            onClick={logout}
            style={{ marginLeft: "30px" }}
          >
            Logout
          </Button>
        </Form>
      </div>
    );
  };

  const renderStudnetLoggedInLinks = () => {
    return (
      <div style={{ display: "flex" }}>
        <Nav.Link as={Link} to="/companies">
          Companies
        </Nav.Link>
        <Nav.Link as={Link} to="/all-jobs">
          All Jobs
        </Nav.Link>
        <Nav.Link as={Link} to="/applied-jobs">
          Applied Jobs
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
        <Form className="d-flex">
          <Button
            variant="outline-dark"
            onClick={logout}
            style={{ marginLeft: "25rem" }}
          >
            Logout
          </Button>
        </Form>
      </div>
    );
  };

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
          <Navbar.Brand as={Link} to="/">
            Campus Recruitment System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {auth.user.role === "company"
                ? renderAdminLoggedInLinks()
                : renderStudnetLoggedInLinks()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PostJob show={show} handleClose={handleClose} handleShow={handleShow} />
    </div>
  );
}

export default Header;
