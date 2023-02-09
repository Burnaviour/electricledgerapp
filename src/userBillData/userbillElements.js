import styled from "styled-components";
// import { Link } from "react-router-dom";
import bg from "../images/Background.svg" 



import "@fontsource/nunito-sans"; 

export const LayoutImage = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
  
`;

export const LayoutImage1 = styled.img`
  flex: 1;
  width: 190%;
  height: 190%;
  margin-left:25%;
  
padding-top: 10%;
  padding-bottom: 10%;
`;

export const LayoutImage2 = styled.img`
  width: 20%;
  height: 20%;
  margin-left : 15px;

`;


export const Background = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
`;

export const Welcome = styled.div`
display: flex;
box-sizing: border-box;
position: center;
position: absolute;
width: 92%;
height: 150px;


/* Grey */

background: #F5F5F7;
border-radius: 14px;
`;
export const DivCenter = styled.div`
/* display: flex; */
  padding: 4%;
  height: 80%;
`;

export const HeadTiltle = styled.h1`
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
margin:0;
/* line-height: 49px; */


/* Black */

color: #0C0B0B;


`;


export const HeadTiltle2 = styled.p`
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
margin:0;
/* line-height: 24px; */
color: #0C0B0B;

`;




export const WelcomeText= styled.div`
padding: 50px;
padding-right: 50%;
align-items: center;
justify-content: left;

`;



export const Container1 = styled.div`
  padding-top: 13%;
  display: flex;
  justify-content: space-between;
`;

export const LeftSection = styled.div`
  width: 50%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

`;


export const Button2 = styled.button`
  background: #0A1813;
  color: white;
  padding: 15px 200px;
  
  white-space: nowrap;
  
  border-radius: 14px;
  border: none;
`;

export const Button1 = styled.button`
  background: #0A1813;
  color: white;
  padding: 20px 80px;
  
  border-radius: 14px;
  border: none;
`;


export const RightSection = styled.div`
  width: 35%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-between;
  margin:0;
`;


// export const Row = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

export const Row1 = styled.div`
  
  display: flex;
  margin-top:0%;
  justify-content: space-between;
  width: 100%;
`;
export const Row2 = styled.div`
  display: flex;
  margin-top:0%;
  justify-content: space-between;
  width: 100%;
`;

export const BottomRow1 = styled.div`
  margin-top:50px;
  display: flex;
  flex-direction: Row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding:1%;
  padding-left:2%;
  padding-right:2%;
  background: #F5F5F7;
  border-radius: 14px;

`;



export const LeftSectionRow1 = styled.div`
  display: flex;
  flex-direction: Row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 22%;
  /* margin-bottom: 15px; */
  padding:3%;
  background: #F5F5F7;
  border-radius: 14px;

`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Image2 = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
   margin-bottom: 5px;
  margin:0;
  padding:0;
`;

export const SubText = styled.div`
  font-size: 15px;
  color: gray;
  margin:0;
`;
export const Correction = styled.div`
  font-size: 0px;
`;


// export const Button = styled.button`
//   background-color: blue;
//   margin-top: 70%;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   border: none;
// `;


export const DataContainer = styled.div`
 display: flex;
  /* flex-direction: Row; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 73px;
  /* margin-left: 5px; */
  padding:3%;
  background: #F5F5F7;
  border-radius: 14px;
`;

export const DataContainer2 = styled.div`
 display: flex;
  /* flex-direction: Row; */
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 73px;
  /* margin-left: 5px; */
  padding:3%;
  background: #F5F5F7;
  border-radius: 14px;
`;



export const DataContainer3 = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;

`;



export const DataRow = styled.div`
margin-bottom:5px;
justify-content: space-between;

`;




export const DataLabel = styled.label`
  

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
/* line-height: 19px; */
color: #FFFFFF;
padding-left: 10px;
`;
export const DataText = styled.div`
  /* flex: 1;
  
  overflow: auto;
  

font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 50px;
display: flex;
align-items: Right;

/* Black */

/* color: #0C0B0B; */
margin:0;
position: relative;;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 45px;


`;

export const DataText1 = styled.div`
margin:0;
position: relative;;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 45px;

width: 700px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;


`;





// ________________________________________________________________________________________



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 50px auto;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* margin-bottom: 20px; */
`;

export const Input = styled.input`
  width: 45%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Button = styled.button`
  width: 45%;
  padding: 10px;
  background-color: #00b3b3;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

export const Block = styled.div`
  width: 45%;
  height: 200px;
  background-color: #ff6666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
`;

export const BlockTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  font-weight: bold;
`;



export const FormLabel1 = styled.label`
  /* margin-bottom: 8px;
  font-size: 14px;
  color: #fff; */
/* width: 72px; */
height: 19px;
margin-top: 10px;
padding-left: 10px;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 19px;
/* identical to box height */


/* Gray 3 */

color: #828282;
`;

export const FormInput = styled.input`
  box-sizing: border-box;

/* Auto layout */

display: flex;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 700;
font-size: 45px;

flex-direction: row;
align-items: center;
padding: 13px 10px;
gap: 5px;
margin-bottom: 15px;


width: 450px;
height: 65px;


background: #FFFFFF;
border: 1px solid #DED2D9;
border-radius: 14px;
`;


