import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function DataDiv(props) {
  const [data, setData] = useState([]);
  let arr2;
  useEffect(() => {
    setData(props.data);
    console.log("DataDiv useEffect props.data: ", data);
  }, [props.data, data]);
  let arr =
    data.success &&
    data.result.map((result) => (
      <div key={result.key}>
        <p>Name: {result.value.name}</p>
        <p>Address: {result.value.address}</p>
        <p>Units: {result.value.units}</p>
      </div>
    ));
  if (data.Ishistory) {
    arr2 = data.history.map((item, key) => {
      const date = new Date(item.Timestamp.seconds * 1000);
      const dateString = date.toLocaleString();
      return (
        <div key={key}>
          <p>Name: {item.Value.name}</p>
          <p>Transaction Id :{item.TxId}</p>
          <p>Time: {dateString}</p>
        </div>
      );
    });
  }

  return (
    <>
      <h1>World State Data</h1>
      {arr}
      {data.Ishistory && (
        <div>
          <h1>History</h1>
          {arr2}
        </div>
      )}
    </>
  );
}
