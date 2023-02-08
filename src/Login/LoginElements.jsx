import styled from "styled-components";
import { Link } from "react-router-dom";

import "@fontsource/nunito-sans"; 


// export const Container = styled.div`
// /* position: ;
// width: 811px;
// height: 1080px;
// left: 1109px;
// top: 0px; */
// position:absolute;
// width: 100%;
// height: 100%;
// margin: 0;
// left: 0;
// top: 0;
// z-index:-1;
// background: #0A1813;
// `;
export const FormWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  position: absolute;
  z-index: 1;
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 28px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background-color: #010101;
  max-width: 400px;
  height: auto;
  width: 100vw;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
width: 367px;
height: 49px;
margin-top: 20px;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 49px;

color: #FFFFFF;
`;


// export const PicTag = styled.div`
// position: absolute;
// width: 72px;
// height: 72px;
// left: 1310px;
// top: 119px;
// `;

export const FormLabel = styled.label`
height: 19px;
margin-top: 10px;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 19px;
color: #828282;
`;

export const FormSelect = styled.select`
  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 13px 10px;
gap: 5px;

width: 420px;
height: 50px;
color: rgba(10, 24, 19, 0.59);

background: #FFFFFF;
border: 1px solid #DED2D9;
border-radius: 5px;

`;

export const FormInput = styled.input`
  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 13px 10px;
gap: 5px;

width: 420px;
height: 45px;

background: #FFFFFF;
border: 1px solid #DED2D9;
border-radius: 5px;
`;


export const DropOption = styled.option`
    
    text-decoration: none;
    &:hover {
      background-color: #01bf71;
    }

`;

export const FormH2 = styled.h2`
width: 358px;
height: 22px;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
/* identical to box height */


color: #01BF71;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;


export const FormButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
gap: 13px;

width: 420px;
height: 50px;

background: #01BF71;
border-radius: 6px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
  cursor: pointer;
   &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000}
`;
/* export const Text = styled.Text`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`; */

export const LogIn = styled.div`
width: 367px;
height: 49px;
margin: 0 auto;

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 49px;

color: #FFFFFF;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;`;



export const StyledContainer = styled.div`
overflow: hidden;
  display: flex;
  min-height:100vh;
  z-index:  ;
  position: RELATIVE;
`;

export const StyledLeft = styled.div`
  width: 50vw;
  z-index:  -1;
  margin: 0; 
  background-color: #01bf71;
  
`;

export  const StyledRight = styled.div`
  width: 50vw;
   z-index:  0;
  background-color: #0A1813;
`;

export const Styledh3= styled.text`
color: "#01bf71"`;

export const BoxH3 = styled.div`
display: flex;
flex-direction: row;
color: #828282;
justify-content: center;
align-items: center;
padding: 10px;
gap: 13px;
margin-top: 15px;

width: 420px;
height: 39px;

border: 1px solid #828282;
border-radius: 5px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

`;

export const BoxH31 = styled.div`
display: flex;
flex-direction: row;
color: #828282;
justify-content: center;
align-items: center;

gap: 13px;
margin-top: 20px;
width: 420px;
height: 39px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

`;
export const StyledCenter = styled.div`
/* padding: 30px; */
margin-top: 40px;
display: flex;
justify-content: center;
 align-items: center;


`;

/* will check back when time is not bahhot tight */
export const BahotTight = styled.div`
  min-width: 1000px;
  min-height: 700px;
  @media (max-width: 1000px) {
    min-width: 700px;
  }
`;




