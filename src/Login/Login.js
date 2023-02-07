import React from "react";
import AdminForm from "./AdminRegister";
import MyForm from "./Form";
import LoginTag from "../images/login-tag.svg"
import {
  FormH1,
  FormH2,
  BoxH3,
  BoxH31,
  StyledCenter,
 
  
  

  // PicTag
} from "./LoginElements";


export default function Login(props) {
  let ip = process.env.REACT_APP_IP;

  return (
    <>
      {props.user === "admin" && (
        <div>
          <h1> Admin Login </h1>
          <AdminForm type="login" address="admin/login" user="admin" ip={ip} />
        </div>
      )}

      {props.user === "user" && (
          

        <StyledCenter>
          <div> 

          <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
            <image href={LoginTag} height="102%" width="105%"/>
          </svg>
          <FormH1> Login to your Account </FormH1>
          <FormH2>See what is going on with your billing transaction.</FormH2>
          <BoxH3> Welcome To Electric Ledger Network</BoxH3>
          <BoxH31>------------- or Sign in with User Name ------------- </BoxH31>
          <MyForm user="user" type="login" address="users/login" ip={ip} /> 

          </div>

          </StyledCenter>
      
      )}
    </>
  );
}



