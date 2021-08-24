import PropTypes from "prop-types";
import React from "react";
import { useFormik } from "formik";
import { Col, Form, Row } from "reactstrap";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { LoginButton, LoginInput } from "./styles";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
  password: Yup.string().required("Password is required!"),
});
const LoginForm = ({ handleFormSubmit }) => {
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: handleFormSubmit,
  });

  return (
    <Form onSubmit={loginFormik.handleSubmit}>
      <Row className="mb-3 px-5">
        <LoginInput
          type="text"
          name="email"
          className="form-control align-self-stretch"
          id="email"
          aria-describedby="email"
          placeholder="email"
          onChange={loginFormik.handleChange}
          value={loginFormik.values.email}
        />
        {loginFormik.errors.email && loginFormik.touched.email ? (
          <div className="text-danger">{loginFormik.errors.email}</div>
        ) : null}
      </Row>
      <Row className="mb-3 px-5">
        <LoginInput
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          id="password"
          onChange={loginFormik.handleChange}
          value={loginFormik.values.password}
        />
        {loginFormik.errors.password && loginFormik.touched.password ? (
          <div className="text-danger">{loginFormik.errors.password}</div>
        ) : null}
      </Row>
      <Row className="form-group m-t-20">
        <Col sm="12" className="mt-2 text-center">
          <LoginButton type="submit" disabled={loginFormik.isSubmitting}>
            {loginFormik.isSubmitting && (
              <span
                className="spinner-border spinner-border-sm mt-0"
                role="status"
                aria-hidden="true"
              />
            )}
            Log in
          </LoginButton>
        </Col>
        <Col sm="12" className="text-center pt-3">
          <Link to="/forget-password">
            <i className="mdi mdi-lock" /> Forgot your password?{" "}
          </Link>
        </Col>
      </Row>
    </Form>
  );
};

LoginForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
