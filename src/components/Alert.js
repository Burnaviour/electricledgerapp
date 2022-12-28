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
          onClose={props.alert}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{props.msg}</p>
        </Alert>
      )}
      {props.type === "success" && (
        <Alert
          className="mt-5"
          variant="success"
          onClose={props.alert}
          dismissible
        >
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            {`Dear ${props.msg.split(" ")[0]} `}
            you have successfully registered. Follow the{" "}
            <Link to="/login " className="custom-link">
              link to login
            </Link>
            .
          </p>
        </Alert>
      )}
    </>
  );
}

export default DangerAlert;
