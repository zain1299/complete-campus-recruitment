import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import BtnPrimary from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import logo from "../../Assets/Images/logo.png";
import "../../Styles/Containners/SignUp.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="SignupMain">
      <form className="SignupForm">
        <Image className="compLogo" src={logo} alt="logo" roundedCircle />
        <TextInput
          placeHolder="First Name"
          type="text"
          id="firstName"
          name="firtName"
        />
        <TextInput
          placeHolder="Last Name"
          type="text"
          id="lastName"
          name="lastName"
        />
        <TextInput placeHolder="Email" id="email" type="email" name="email" />

        <div>
          <Form.Group style={{ display: "flex" }}>
            <Form.Label style={{ marginRight: "1rem" }}>Signup as</Form.Label>
            <Form.Check
              style={{ justifyContent: "flex-start" }}
              type="radio"
              label="Student"
              name="radioType"
              id="Student"
              value="Student"
            />
            <Form.Check
              style={{ marginLeft: "1rem" }}
              type="radio"
              label="Company"
              name="radioType"
              id="Company"
              value="Company"
            />
          </Form.Group>
        </div>

        <TextInput
          placeHolder="Password"
          type="password"
          id="password"
          name="password"
        />
        <Form.Group>
          <Form.Check
            style={{
              display: "flex",
              marginTop: "0.199rem",
              marginBottom: "1rem",
            }}
            type="checkbox"
            label="I hereby agree all terms of services "
          />
        </Form.Group>
        <BtnPrimary type="submit" title="Sign Up" />
        <Link to="/">
          <Button variant="link" type="button">
            Already have an account ?
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
