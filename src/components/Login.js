import React from "react";
import MyForm from "./Form";

export default function Login(props) {
  return (
    <>
      <h1> Login </h1>
      {props.user === "admin" && (
        <MyForm type="login" address="users/login" user="admin" />
      )}
      {props.user === "user" && (
        <MyForm user="user" type="login" address="users/login" />
      )}
    </>
  );
}
