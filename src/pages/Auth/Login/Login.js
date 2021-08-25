import React from "react";
import { useHistory } from "react-router-dom";
import { CardBody, Col, Row } from "reactstrap";
import { toast } from "react-toastify";
import {
  LoginCardTitle,
  LoginFooterLeftCol,
  LoginFooterRightCol,
  LoginFormCard,
  LoginPageContainer,
  LoginPageFooterContainer,
} from "./styles";
import LoginForm from "./LoginForm";
import { postData } from "../../../helpers/axiosUtils";
import { LOGIN_URL } from "../../../apiEndpoints";
import {
  setToken,
  setPermission,
  setRefreshToken,
  setProfile,
} from "../../../helpers/authUtils";

const Login = () => {
  const history = useHistory();

  const handleLoginFormSubmit = (values, actions) => {
    postData(LOGIN_URL, values)
      .then((res) => {
        console.log("resp", res);
        actions.setSubmitting(false);
        if (res.data && res.data.is_password_reset === false) {
          // If password is not reset, force the user to reset it
          toast.info("Please reset your password to continue..");
          history.push(`/reset-password/${values.username}`);
        } else {
          setToken(res.tokens.access.token);
          setRefreshToken(res.tokens.refresh.token);
          setPermission();
          setProfile(res.user);
          toast.success(res.message);
          history.push("/dashboard");
        }
      })
      .catch((err) => {
        actions.setSubmitting(false);
        toast.error(err.message);
        console.log("Catch Error");
      });
  };

  return (
    <>
      <LoginPageContainer fluid className="min-vh-100">
        <Row className="align-items-center min-vh-100">
          <Col md={{ size: 3, offset: 6 }} lg={{ size: 3, offset: 7 }}>
            <LoginFormCard className="text-center">
              <CardBody>
                <LoginCardTitle className="mb-5">
                  <h4 className="font-26 m-b-5  pt-4">Welcome Back!</h4>
                  <p className="mb-4 font-16">
                    Sign in to continue to{" "}
                    <strong className="font-weight-bold">Test-Web</strong>
                  </p>
                </LoginCardTitle>
                <LoginForm handleFormSubmit={handleLoginFormSubmit} />
              </CardBody>
            </LoginFormCard>
          </Col>
        </Row>
      </LoginPageContainer>
      <LoginPageFooterContainer fluid className="fixed-bottom pt-2">
        <Row>
          <LoginFooterLeftCol>
            <h5>
              <i className="ion ion-md-call" /> ----
            </h5>
          </LoginFooterLeftCol>
          <LoginFooterRightCol className="text-right">
            Nodex
          </LoginFooterRightCol>
        </Row>
        <div className="py-2 bg-white">
          <p className="m-0 text-center">
            © {new Date().getFullYear()} | Frontend App Version:{" "}
            {`${process.env.REACT_APP_VERSION}`}
          </p>
        </div>
      </LoginPageFooterContainer>
    </>
  );
};

export default Login;
