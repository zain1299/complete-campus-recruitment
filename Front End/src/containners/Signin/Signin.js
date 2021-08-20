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
import { useFormik } from "formik";
import * as Yup from "yup";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const userLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  return auth?.authenticate ? (
    <Redirect to={"/"} />
  ) : (
    <div className="SigninMain">
      <form onSubmit={formik.handleSubmit} className="SigninForm">
        <Image className="compLogo" src={logo} alt="logo" roundedCircle />
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
          <Form.Check className="my-2" type="checkbox" label="Remember me " />
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
