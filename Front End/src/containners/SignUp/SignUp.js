import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import BtnPrimary from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import logo from "../../Assets/Images/logo.png";
import "../../Styles/Containners/SignUp.css";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/Signup/signupActions";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const auth = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      role,
    };
    dispatch(signup(user));
  };

  return auth?.authenticate ? (
    <Redirect to={"/"} />
  ) : (
    <div className="SignupMain">
      <form className="SignupForm">
        <Image className="compLogo" src={logo} alt="logo" roundedCircle />
        <TextInput
          placeHolder="First Name"
          type="text"
          name="firtName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextInput
          placeHolder="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextInput
          placeHolder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <Form.Group style={{ display: "flex" }}>
            <Form.Label style={{ marginRight: "1rem" }}>Signup as</Form.Label>
            <Form.Check
              style={{ justifyContent: "flex-start" }}
              type="radio"
              label="Student"
              value="student"
              onChange={(e) => setRole(e.target.value)}
            />
            <Form.Check
              style={{ marginLeft: "1rem" }}
              type="radio"
              label="Company"
              value="company"
              onChange={(e) => setRole(e.target.value)}
            />
          </Form.Group>
        </div>

        <TextInput
          placeHolder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <BtnPrimary type="submit" title="Sign Up" onClick={userSignup} />
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
