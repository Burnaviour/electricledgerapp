import React from "react";

const UserBillData = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const apiResponse = { result: result };
  console.log(apiResponse);
  const prices = JSON.parse(localStorage.getItem("prices"));
  const cnic = JSON.parse(localStorage.getItem("result"))[0].value.cnic;
  var WorldState = null;
  var resultHistory1 = null;

  return (
    <>
      {getResults(apiResponse)}
      {console.log(resultHistory1)}
      <h1>Bill Details</h1>
      {WorldState}
      <h3>Service Chrages {prices.servicesCharges} PKR</h3>
      <h3>Tax {prices.tax} %</h3>
      <h3>Unit Price {prices.unitPrice} PKR</h3>
      <h3>CNIC : {cnic}</h3>
    </>
  );
  function getResults(data) {
    data.result &&
      data.result.map(
        (result) =>
          (resultHistory1 = {
            Name: result.value.name,
            Address: result.value.address,
            Units: result.value.units,
          })
      );
  }
};
export default UserBillData;
