import React from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";

function ReadOnlyModals({ data, show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <form>
        <Modal.Header closeButton>
          <Modal.Title>Student Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form.Group>
              <Form.Label className="labels" htmlFor="title">
                Full Name
              </Form.Label>
              <Form.Control
                id="title"
                type="text"
                value={data?.firstName + " " + data?.lastName}
                disabled={true}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="labels" htmlFor="title">
                Email
              </Form.Label>
              <Form.Control
                id="title"
                type="text"
                value={data?.email}
                disabled={true}
              />
            </Form.Group>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ReadOnlyModals;
