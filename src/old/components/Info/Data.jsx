import CarSvg from "../InfoImg/Img1";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-4.svg";
import Icon3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: "Decentralized System",
  headline: "Protected from data tampering",
  description:
    "Electric Ledger is a blockchain-based electricity billing system that aims to combat issues with traditional billing methods. It uses smart meters to send real-time values to the system, which are then stored in a decentralized network with a unique transaction ID.",
  buttonLabel: "Get started",
  imgStart: false,
  img: Icon1,
  alt: "tampering",
  svg: <CarSvg />,
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Transparency",
  headline: "Higher level of accountability",
  description:
    "The Electric Ledger project is designed to provide transparency to users of the system. The goal is to create a system where users can see all of their billing records and usage history in one place, with all data stored on a secure and decentralized blockchain network.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: Icon2,
  alt: "Accountability",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Electric Ledger",
  headline: "Registration is extremely easy",
  description:
    "Get access to our exclusive exclusive services that provides a user-friendly interface for users to view and manage their records.",
  buttonLabel: "Start Now",
  
  imgStart: false,
  img: Icon3,
  alt: "Register",
  primary: false,
  darkText: true,
};
