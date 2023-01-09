import React from "react";
import MyForm from "./Form";

export default function Login(props) {
  let ip = process.env.REACT_APP_IP;

  return (
    <>
      <h1> Login </h1>
      {props.user === "admin" && (
        <MyForm type="login" address="users/login" user="admin" ip={ip} />
      )}
      {props.user === "user" && (
        <MyForm user="user" type="login" address="users/login" ip={ip} />
      )}
    </>
  );
}
