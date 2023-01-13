import React from "react";
import AdminForm from "./AdminRegister";
import MyForm from "./Form";
export default function Login(props) {
  let ip = process.env.REACT_APP_IP;

  return (
    <>
      {props.user === "admin" && (
        <div>
          <h1> Admin Login </h1>
          <AdminForm type="login" address="users/login" user="admin" ip={ip} />
        </div>
      )}

      {props.user === "user" && (
        <div>
          <h1> User Login </h1>
          <MyForm user="user" type="login" address="users/login" ip={ip} />
        </div>
      )}
    </>
  );
}
