import React from "react";
import QueryData from "./QueryData";
import hellopic from "../images/Hello.svg";
import {
  Welcome,
  Background,
  WelcomeText,
  HeadTiltle,
  HeadTiltle2,
  LayoutImage,
  DivCenterMain,
} from "./querybillElements";
import { Link } from "react-router-dom";
import { FloatingButton } from "../userHistory/userhistoryElements";
export default function QueryBill() {
  return (
    <>
      <Background>
        <Link to="/admin-dashboard">
          <FloatingButton>Dashboard</FloatingButton>
        </Link>
        <DivCenterMain>
          <Welcome>
            <WelcomeText>
              <HeadTiltle>Query Bill</HeadTiltle>
              <HeadTiltle2>Admin panel to Check user data.</HeadTiltle2>
            </WelcomeText>
            <LayoutImage src={hellopic} />
          </Welcome>
        </DivCenterMain>
        <QueryData /> <br />
      </Background>
    </>
  );
}
