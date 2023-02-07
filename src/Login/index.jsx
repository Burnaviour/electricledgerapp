

import React from "react";
import Login from "./Login";
import pic from "../images/log-in.svg"
import {
  // Container,
  // FormWrap,
  Icon,
  // FormContent,
  // Form,
  // FormH1,
  // LoginSVG,
  StyledContainer,
  StyledLeft,
  StyledRight
} from "./LoginElements";


const SignIn = () => {
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
      {/* <Form action="#">*/}
              {/* <FormH1>Login to your Account</FormH1>  */}
                <Login user="user"/>
        {/* </Form> */}
      {/* <Container> */}
        {/* <FormWrap>
          <FormContent>
           
            </FormContent>
          </FormWrap> */}
        {/* </Container>  */}
      </StyledRight>


      </StyledContainer>
    </>
  );
};

export default SignIn;
