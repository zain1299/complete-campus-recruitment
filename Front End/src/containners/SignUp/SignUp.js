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
import { useFormik } from "formik";
import * as Yup from "yup";

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

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return auth?.authenticate ? (
    <Redirect to={"/"} />
  ) : (
    <div className="SignupMain">
      <form onSubmit={formik.handleSubmit} className="SignupForm">
        <Image className="compLogo" src={logo} alt="logo" roundedCircle />
        <Form.Group>
          <TextInput
            placeHolder="First Name"
            type="text"
            name="firtName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </Form.Group>

        <TextInput
          placeHolder="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Form.Group>
          <TextInput
            placeHolder="Email"
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={formik.handleBlur}
            // {...formik.getFieldProps("email")}
          />

          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </Form.Group>

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

        <Form.Group>
          <TextInput
            placeHolder="Password"
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={formik.handleBlur}
            // {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </Form.Group>

        <Form.Group>
          <Form.Check
            className="my-3"
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
