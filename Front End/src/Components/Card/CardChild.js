import React from "react";
import { Card } from "react-bootstrap";
import "../../Styles/Components/Card.css";

function Cards({
  title,
  text,
  key2,
  value2,
  key3,
  value3,
  key4,
  value4,
  key5,
  value5,
  last_date,
}) {
  return (
    <div className="card-main">
      <Card className="card-child">
        <Card.Body className="card-body">
          <Card.Title>{title} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          <Card.Text>
            {key2} {value2}
          </Card.Text>
          <Card.Text>
            {key3} {value3}
          </Card.Text>
          <Card.Text>
            {key4} {value4}
          </Card.Text>
          <Card.Text>
            {key5} {value5}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{last_date}</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Cards;
