import styled from "styled-components";
// import { Link } from "react-router-dom";
import bg from "../images/Background.svg" 



import "@fontsource/nunito-sans"; 

export const LayoutImage = styled.img`
  flex: 1;
  width: 100%;
  height: 100%;
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
  height: 90%;
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
  width: 55%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

`;

export const Button1 = styled.button`
  background: #01BF71;
  color: white;
  padding: 10px 20px;

  /* margin-bottom: 20px; */
  border-radius: 5px;
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


export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Row1 = styled.div`
  display: flex;
  margin-top:0%;
  justify-content: space-between;
  width: 100%;
`;

export const BottomRow1 = styled.div`
  margin-top:22px;
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
  margin-bottom: 15px;
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
  font-size: 20px;
  font-weight: bold;
  /* margin-bottom: 5px; */
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


export const Button = styled.button`
  background-color: blue;
  margin-top: 70%;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;


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
  width: 215px;
  height: 73px;
  /* margin-left: 5px; */
  padding:3%;
  background: #F5F5F7;
  border-radius: 14px;
`;



export const DataRow = styled.div`
margin-bottom:5px;

`;



export const DataLabel = styled.label`
  

padding-left: 10px;
font-family: 'Nunito Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
/* line-height: 19px; */
color: #FFFFFF;
`;

export const DataText = styled.div`
  /* flex: 1;
  padding: 10px;
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

