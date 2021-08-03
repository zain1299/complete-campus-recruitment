import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../Styles/Components/Card.css";

function Cards() {
  return (
    <div className="card-main">
      <Card className="card-child">
        <Card.Body className="card-body">
          <Card.Title>Internship </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
          <Card.Text>welcome to the hello world</Card.Text>
          <Card.Text>Minimum GPA Required 3</Card.Text>
          <Card.Text>Tentative Salary 30,000</Card.Text>
          <Card.Text></Card.Text>
          <span className="span-body">
            <Button variant="danger">Delete</Button>

            <br />
            <Card.Link href="#">Hello </Card.Link>
          </span>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Last date to apply is Mon Jul 26 2021
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Cards;
