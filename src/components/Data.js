import React from "react";
import { useState } from "react";
import { useEffect } from "react";

let resultHistory;
let Result;

export default function DataDiv(props) {
  // const [arr, setArr] = useState([]);
  const [data, setData] = useState(props.data);
  const [currentUsage, setCurrentusage] = useState(0);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    console.count("useEffect");
    if (data.Ishistory) {
      let arr = data.history.map((item) => item.Value.units);
      console.log(arr.length % 30);
      function getCurrentUage() {
        let index = arr.length % 30;
        let currentUsage = 0;
        for (let i = 0; i < index; i++) {
          currentUsage += arr[i];
        }
        return currentUsage;
      }
      setCurrentusage(getCurrentUage());
      console.log("current Usage", currentUsage);
    }
  }, [data.Ishistory, data.history, currentUsage]);

  if (data.success) {
    getResults(data);
  }

  if (data.Ishistory) {
    getHistory(data);
  }

  return (
    <>
      <div>
        {data.success && (
          <div>
            <h1>World State Data</h1>
            {Result}
          </div>
        )}

        {data.Ishistory && (
          <div className="History-div">
            <h1>History</h1>
            {resultHistory}
          </div>
        )}
      </div>
    </>
  );
}

function getHistory(data) {
  resultHistory = data.history.map((item, key) => {
    const date = new Date(item.Timestamp.seconds * 1000);
    const dateString = date.toLocaleString();
    return (
      <div key={key}>
        <p>Name: {item.Value.name}</p>
        <p>Transaction Id :{item.TxId}</p>
        <p>Time: {dateString}</p>
        <p>Address: {item.Value.address}</p>
        <p>Units: {item.Value.units}</p>
      </div>
    );
  });
}

function getResults(data) {
  Result =
    data.success &&
    data.result.map((result) => (
      <div key={result.key}>
        <p>Name: {result.value.name}</p>
        <p>Address: {result.value.address}</p>
        <p>Units: {result.value.units}</p>
      </div>
    ));
}
