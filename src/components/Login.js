import React from "react";
import MyForm from "./Form";

export default function Login() {
  return (
    <>
      <h1> Login </h1>
      <MyForm type="login" address="users/login" />
    </>
  );
}
