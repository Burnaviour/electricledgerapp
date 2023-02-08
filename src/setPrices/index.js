import React from "react";
import UnitPrice from "./UnitPrices";
import hellopic from "../images/Hello.svg"
import {
Welcome, 
Background, 
DivCenter,
WelcomeText,
HeadTiltle,
HeadTiltle2,
LayoutImage,
} from "./setpriceElements"

export default function SetPrices() {
  let ip = process.env.REACT_APP_IP;
  return (
    <>
    <Background>
      <DivCenter>

      <Welcome>
      <WelcomeText> 
          <HeadTiltle>Set Prices</HeadTiltle>
          <HeadTiltle2>Change Current Prices.</HeadTiltle2>
      </WelcomeText>
      <LayoutImage src={hellopic} />
      </Welcome> 

      </DivCenter>
      <DivCenter>
      <UnitPrice address="/SetPrices" ip={ip} />
      </DivCenter>

      
      </Background>
    </>
  );
}
