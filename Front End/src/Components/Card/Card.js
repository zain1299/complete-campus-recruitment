import React from "react";
import { Card, Button } from "react-bootstrap";

function Cards() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "2em",
        marginRight: "0.4em",
        marginLeft: "0.2em",
      }}
    >
      <Card
        style={{
          width: "18em",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "20em",
          }}
        >
          <Card.Title>Internship </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
          <Card.Text>welcome to the hello world</Card.Text>
          <Card.Text>Minimum GPA Required 3</Card.Text>
          <Card.Text>Tentative Salary 30,000</Card.Text>
          <Card.Text></Card.Text>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "auto",
            }}
          >
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
