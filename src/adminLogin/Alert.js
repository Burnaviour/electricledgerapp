import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { BoxH32 } from "./adminElements";
function DangerAlert(props) {
  return (
    <>
      {props.type === "danger" && (
        <Alert
          className="mt-5"
          variant="danger"
          onClose={props.dangerAlert}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{props.res.message}</p>
        </Alert>
      )}
      {props.type === "success" && (
        <BoxH32>
          <Alert
            className="mt-5"
            variant="success"
            onClose={props.successAlert}
            dismissible
          >
            <Alert.Heading>Success!</Alert.Heading>
            <p>
              {`Dear ${props.res.username} `}
              you have{" "}
              {props.res.IsNewUser
                ? "successfully registered"
                : "already registered"}
              . Follow the{" "}
              {props.user === "admin" ? (
                <Link to="/admin-login " className="custom-link">
                  link to login
                </Link>
              ) : (
                <Link to="/login " className="custom-link">
                  {" "}
                  link to login
                </Link>
              )}
              .
            </p>
          </Alert>
        </BoxH32>
      )}
    </>
  );
}

export default DangerAlert;
