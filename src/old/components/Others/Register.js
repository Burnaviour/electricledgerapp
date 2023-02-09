import React from "react";
import MyForm from "./Form";
export default function Register() {
  let ip = process.env.REACT_APP_IP;
  console.log(process.env.REACT_APP_IP);
  return (
    <>
      <div>
        <h1>User Register </h1>
        <MyForm type="register" address="register" ip={ip} />
      </div>
    </>
  );
}
