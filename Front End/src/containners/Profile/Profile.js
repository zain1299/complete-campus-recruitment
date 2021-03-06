import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "../../Components/TextInput";
import { updateAction } from "../../redux/UpdateUser/action";
import "../../Styles/Containners/Company/Profile/Profile.css";
import Header from "../Header/Header";

function Profile() {
  const [briefProfile, setBriefProfile] = useState();

  const auth = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const user_id = auth.user._id;

  const userUpdate = (e) => {
    e.preventDefault();

    const user = {
      user_id,
      briefProfile,
    };
    dispatch(updateAction(user));
  };

  return (
    <div className="ProfileMain">
      <Header />
      <Form className="ProfileForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <TextInput placeHolder={auth?.user.firstName} disabled="ture" />
          <Form.Label>Last Name</Form.Label>
          <TextInput placeHolder={auth?.user.lastName} disabled="ture" />
          <Form.Label>Email</Form.Label>
          <TextInput
            placeHolder={auth?.user.email}
            id="email"
            type="email"
            name="email"
            disabled="ture"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Brief Profile</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder={auth?.user.breifProfile}
            onChange={(e) => setBriefProfile(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <TextInput
            placeHolder={`signed in as ${auth.user.role}`}
            type="text"
            disabled="ture"
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={userUpdate}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Profile;
