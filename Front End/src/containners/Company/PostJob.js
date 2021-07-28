import React from "react";
import { Modal, Container, Form, Button } from "react-bootstrap";
import "../../Styles/Containners/Company/PostJob.css";

function PostJob({ show, handleClose }) {
  return (
    <div className="ModalMain">
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Vacancy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form.Group>
                <Form.Label className="labels" htmlFor="title">
                  Job Title
                </Form.Label>
                <Form.Control
                  id="title"
                  type="text"
                  placeholder="Job Title here"
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Job Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group>
                <Form.Label className="labels" htmlFor="gpa">
                  Minimum GPA Required
                </Form.Label>
                <Form.Control
                  id="gpa"
                  type="number"
                  placeholder="Minimum GPA Required"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="labels" htmlFor="salary">
                  Minimum Salary
                </Form.Label>
                <Form.Control
                  id="salary"
                  type="number"
                  placeholder="Minimum Salary"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="labels" htmlFor="lastDateToApply">
                  Last Date to Apply
                </Form.Label>
                <Form.Control id="lastDateToApply" type="date" />
              </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Post
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default PostJob;
