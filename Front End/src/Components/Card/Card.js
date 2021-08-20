import React from "react";
import { useSelector } from "react-redux";
import { Card, Button, Dropdown, DropdownButton } from "react-bootstrap";
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
  dropDownValue,
  dropDownClickHandler,
  onClick,
  temp,
}) {
  const auth = useSelector((state) => state.user);

  const renderAdminLoggedIn = () => {
    return (
      <span className="span-body">
        <Button variant="danger" onClick={onClick}>
          Delete
        </Button>
        <br />

        {dropDownValue ? (
          <DropdownButton
            variant="secondary"
            title="Applied Students"
            id="dropdown-menu-align-right"
            onClick={dropDownClickHandler}
          >
            {dropDownValue.length > 0 ? (
              dropDownValue?.map((item, index) => (
                <Dropdown.Item eventKey={index}>
                  {item?.firstName + " " + item.lastName}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item eventKey="no dat">No Entries</Dropdown.Item>
            )}
          </DropdownButton>
        ) : null}
      </span>
    );
  };

  const renderStudnetLoggedIn = () => {
    return (
      <span className="span-body">
        <Button variant="danger" onClick={onClick}>
          Apply this job
        </Button>
      </span>
    );
  };

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
          {auth.user.role === "company"
            ? renderAdminLoggedIn()
            : renderStudnetLoggedIn()}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Last date to apply is {last_date}
          </small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Cards;
