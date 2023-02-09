import React from "react";
import MyForm from "../Login/Form";
import pic from "../images/signinmob.svg"
import {

  Icon,
  StyledContainer,
  StyledLeft,
  StyledRight,
  FormH1,
  FormH2,
  BoxH3,
  BoxH31,
 
} from "./RegisterElements";





export default function Register() {
  let ip = process.env.REACT_APP_IP;
  console.log(process.env.REACT_APP_IP);
  return (
    <>
     <StyledContainer>
      <Icon to="/"> &lt;Home</Icon>
      <StyledLeft>
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <image href={pic} height="102%" width="105%"/>
            </svg>
      </StyledLeft>
      <StyledRight>
        
          <FormH1> Account Registration </FormH1>
          <FormH2>Do you know what is going on with your billing records.</FormH2>
          <BoxH3> Join Electric Ledger Network</BoxH3>
          <BoxH31>------------- or Sign in with User Name ------------- </BoxH31>
          <MyForm type="register" address="register" ip={ip} />
        
        </StyledRight>


</StyledContainer>

    </>
  );
}
