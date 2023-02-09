import React from "react";
import { useState } from "react";
import { useEffect, createContext } from "react";
import {
  CenteredDiv,
  RowW,
  ColumnW,
  ContainerW,
  BoxW,
  LabelW,
  LabelW1,
  DataContainerWorld,
  DataText1,
  RowW1,
  DataLabel,
  DataRow,
  DataContainer,
  DivCenter,
  LabelW123,
} from "./querybillElements";

// import Button from "react-bootstrap/Button";

let resultHistory;
let Result;

export const UserContext = createContext();

export default function DataDiv(props) {
  // const [arr, setArr] = useState([]);
  const [data, setData] = useState(props.data);
  // const [isLoadingbtn, setLoadingbtn] = React.useState(false);

  const [currentUsage, setCurrentusage] = useState(0);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  // function handleClick2(event) {
  //   console.log("btn 2");
  //   setLoadingbtn(true);
  //   // simulate a delay
  //   setTimeout(function () {
  //     setLoadingbtn(false);
  //   }, 1000);
  // }

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
        {/* <Button
          variant="success"
          type="button"
          disabled={isLoadingbtn}
          onClick={!isLoadingbtn ? handleClick2 : null}
        >
          {isLoadingbtn ? "Loading…" : "Generate Bill"}
        </Button> */}
        {data.success && (
          <div>
            <LabelW123>World State Data</LabelW123>
            {Result}
          </div>
        )}
        {data.Ishistory && (
          <div className="History-div">
            <LabelW123>History</LabelW123>
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
      <>
        {/* <div key={key}>
        <p>Name: {item.Value.name}</p>
        <p>Transaction Id :{item.TxId}</p>
        <p>Time: {dateString}</p>
        <p>Address: {item.Value.address}</p>
        <p>Units: {item.Value.units}</p>
      </div> */}

        <CenteredDiv>
          <DataContainer key={key}>
            <ContainerW>
              <LabelW>-• Record No: {key + 1} •-</LabelW>
              <RowW>
                <ColumnW>
                  <LabelW>Name</LabelW>
                  <BoxW>{item.Value.name}</BoxW>
                </ColumnW>
                <ColumnW>
                  <LabelW>Time Stamp</LabelW>
                  <BoxW>{dateString}</BoxW>
                </ColumnW>
              </RowW>
              <RowW>
                <ColumnW>
                  <LabelW>Address</LabelW>
                  <BoxW>{item.Value.address}</BoxW>
                </ColumnW>
                <ColumnW>
                  <LabelW>Units</LabelW>
                  <BoxW>{item.Value.units}</BoxW>
                </ColumnW>
              </RowW>
              <RowW1>
                <LabelW1>Transaction Id</LabelW1>
                <BoxW>{item.TxId}</BoxW>
              </RowW1>
            </ContainerW>
          </DataContainer>
        </CenteredDiv>
      </>
    );
  });
}

function getResults(data) {
  Result =
    data.success &&
    data.result.map((result) => (
      <div key={result.key}>
        {/* <p>Name: {result.value.name}</p>
        <p>Address: {result.value.address}</p>
        <p>Units: {result.value.units}</p> */}
        <DivCenter>
          <DataRow>
            <DataLabel>Name</DataLabel>
            <DataContainerWorld>
              <DataText1>{result.value.name}</DataText1>
            </DataContainerWorld>
          </DataRow>

          <DataRow>
            <DataLabel>Address</DataLabel>
            <DataContainerWorld>
              <DataText1>{result.value.address}</DataText1>
            </DataContainerWorld>
          </DataRow>

          <DataRow>
            <DataLabel>Units</DataLabel>
            <DataContainerWorld>
              <DataText1>{result.value.units}</DataText1>
            </DataContainerWorld>
          </DataRow>
        </DivCenter>
      </div>
    ));
}
