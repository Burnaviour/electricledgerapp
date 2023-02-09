import React from "react";
import UnitPrice from "./UnitPrices";
export default function SetPrices() {
  let ip = process.env.REACT_APP_IP;
  return (
    <>
      <h1>Set Pricing for Monthhly Bill</h1>
      <UnitPrice address="/SetPrices" ip={ip} />
    </>
  );
}
