import React from "react";

import AdminForm from "../adminLogin/index";

const AdminLogin = (props) => {
  let ip = process.env.REACT_APP_IP;
  return (
    <>
      {props.type === "register" && (
        <AdminForm
          ip={ip}
          user="admin"
          type="register"
          address="admin/register"
        />
      )}
      {props.type === "login" && (
        <AdminForm ip={ip} user="admin" type="login" address="admin/login" />
      )}
    </>
  );
};

export default AdminLogin;
