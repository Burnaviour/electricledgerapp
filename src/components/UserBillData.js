import React from "react";

const UserBillData = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const apiResponse = { result: result };
  const prices = JSON.parse(localStorage.getItem("prices"));
  const cnic = JSON.parse(localStorage.getItem("result"))[0].value.cnic;
  var WorldState = null;
  return (
    <>
      {getResults(apiResponse)}
      <h1>Bill Details</h1>
      {WorldState}
      <h3>Service Chrages {prices.servicesCharges} PKR</h3>
      <h3>Tax {prices.tax} %</h3>
      <h3>Unit Price {prices.unitPrice} PKR</h3>
      <h3>CNIC : {cnic}</h3>
    </>
  );
  function getResults(data) {
    WorldState =
      data.result &&
      data.result.map((result) => (
        <div key={result.key}>
          <p>Name: {result.value.name}</p>
          <p>Address: {result.value.address}</p>
          <p>Units: {result.value.units}</p>
        </div>
      ));
  }
};
export default UserBillData;
