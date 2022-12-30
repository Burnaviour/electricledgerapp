import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function DataDiv(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
    console.log("DataDiv useEffect props.data: ", data);
  }, [props.data, data]);

  return <h1>Data</h1>;
}
