import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
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
              <Link to="/signin " className="custom-link">
                {" "}
                link to login
              </Link>
            )}
            .
          </p>
        </Alert>
      )}
    </>
  );
}

export default DangerAlert;
