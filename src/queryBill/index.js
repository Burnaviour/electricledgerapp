import React from "react";
import QueryData from "./QueryData";

export default function QueryBill() {
  return (
    <>
      <Background>
      <DivCenter>

      <Welcome>
      <WelcomeText> 
          <HeadTiltle>Generate Bill</HeadTiltle>
          <HeadTiltle2>Current bill will be generated.</HeadTiltle2>
      </WelcomeText>
      <LayoutImage src={hellopic} />
      </Welcome> 

      <QueryData /> <br />



      </DivCenter>
      </Background>
    </>
  );
}
