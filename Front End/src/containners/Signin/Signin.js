import React from "react";
import { Button, Form, Image } from "react-bootstrap";
import BtnPrimary from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import logo from "../../Assets/Images/logo.png";
import "../../Styles/Containners/Signin.css";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Users/userActions";
import { useSelector } from "react-redux";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);

  const userLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  return auth?.authenticate ? (
    <Redirect to={"/"} />
  ) : (
    <div className="SigninMain">
      <form className="SigninForm">
        <Image className="compLogo" src={logo} alt="logo" roundedCircle />

        <TextInput
          placeHolder="Email"
          value={email}
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          placeHolder="Password"
          type="password"
          value={password}
          id="password"
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
            label="Remember me "
          />
        </Form.Group>
        <BtnPrimary type="submit" title="Signin" onClick={userLogin} />
        <Link to="/signup">
          <Button variant="link" type="button">
            Don't have an account ?
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
