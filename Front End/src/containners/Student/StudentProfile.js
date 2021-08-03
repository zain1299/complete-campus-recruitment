import React from "react";
import Header from "../Header/Header";
import { Form, Button } from "react-bootstrap";
import TextInput from "../../Components/TextInput";
import { useSelector } from "react-redux";

function StudentProfile() {
  const auth = useSelector((state) => state.user);

  return (
    <div className="ProfileMain">
      <Header />
      <Form className="ProfileForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Firt Name</Form.Label>
          <TextInput placeHolder={auth.user.firstName} disabled="ture" />
          <Form.Label>Last Name</Form.Label>
          <TextInput placeHolder={auth.user.lastName} disabled="ture" />
          <Form.Label>Email</Form.Label>
          <TextInput
            placeHolder={auth.user.email}
            id="email"
            type="email"
            name="email"
            disabled="ture"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Brief Profile</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Brief Profile" />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextInput
            placeHolder="signed in as Student"
            type="text"
            disabled="ture"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default StudentProfile;
