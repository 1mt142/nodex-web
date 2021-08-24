/**
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-05-03 16:11:29
 * @modify date 2021-05-03 16:11:30
 * @desc [description]
 */
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Card, Col, FormGroup, Label, Row } from "reactstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import handleError from "../../helpers/handleError";
import { postData } from "../../helpers/axiosUtils";
import { USER_SET_PASSWORD } from "../../apiEndpoints";

// TODO: Convert it to functional component with hooks
const ResetPasswordByUser = () => {
  const history = useHistory();
  const { username } = useParams();
  // const [errorMsg, setErrorMsg] = useState("");
  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    old_password: Yup.string().required("Required"),
    new_password: Yup.string().required("Required"),
    passwordConfirmation: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
  });
  const handleSubmit = (values, actions) => {
    postData(USER_SET_PASSWORD, values)
      .then(() => {
        history.push("/login");
        toast.success("Password reset is successful. Login with new password.");
      })
      .catch((err) => {
        handleError(err, actions);
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };
  return (
    <>
      <div className="wrapper-page">
        <Card className="overflow-hidden account-card mx-3">
          <div className="bg-primary p-4 text-white text-center position-relative">
            <h4 className="font-20 mb-4">Reset Password</h4>
            {/* <Link to="/" className="logo logo-admin"><img src={logosm} height="24" alt="logo" /></Link> */}
          </div>
          <div className="account-card-content">
            <Formik
              initialValues={{
                username,
                old_password: "",
                new_password: "",
                passwordConfirmation: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formikProps) => (
                <Form onSubmit={formikProps.handleSubmit}>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                  <FormGroup>
                    <Label>Old Password</Label>
                    <Field
                      name="old_password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="old_password"
                      component="div"
                      className="text-danger"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>New Password</Label>
                    <Field
                      name="new_password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="new_password"
                      component="div"
                      className="text-danger"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Confirm New Password</Label>
                    <Field
                      name="passwordConfirmation"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="passwordConfirmation"
                      component="div"
                      className="text-danger"
                    />
                  </FormGroup>
                  <Row>
                    <Col className="text-right">
                      <Button
                        className="primary-color mt-3"
                        type="submit"
                        disabled={
                          !formikProps.dirty || formikProps.isSubmitting
                        }
                      >
                        Reset Password
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ResetPasswordByUser;
