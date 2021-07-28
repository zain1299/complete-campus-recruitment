import React from "react";
import { Form, Button } from "react-bootstrap";
import TextInput from "../../Components/TextInput";
import "../../Styles/Containners/Company/Profile/Profile.css";
import Header from "./Header/Header";

function Profile() {
  return (
    <div className="ProfileMain">
      <Header />
      <Form className="ProfileForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <TextInput placeHolder="zain" disabled="ture" />
          <Form.Label>Email</Form.Label>
          <TextInput
            placeHolder="abcd@gmail.com"
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
            placeHolder="signed in as Company"
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

export default Profile;
