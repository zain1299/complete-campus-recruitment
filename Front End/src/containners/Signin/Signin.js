import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import BtnPrimary from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import logo from "../../Assets/Images/logo.png";
import "../../Styles/Containners/Signin.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="SigninMain">
      <form className="SigninForm">
        <Image className="compLogo" src={logo} alt="logo" roundedCircle />

        <TextInput placeHolder="Email" id="email" type="email" name="email" />

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
            label="Remember me "
          />
        </Form.Group>
        <BtnPrimary type="submit" title="Signin" />
        <Link to="/signup">
          <Button variant="link" type="button">
            Don't have an account ?
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
