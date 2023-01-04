import React, { useEffect, useState } from "react";
// import { PDFViewer } from "@react-pdf/renderer";
import logo from "../assets/logo.png";

import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";

export default function GenerateBill() {
  return (
    <>
      <h1>Generate Bill</h1>
      <h1>Organization ElectricLadger</h1>
      <ExampleComponent />
    </>
  );
}

const ExampleComponent = () => {
  const [uid, setUid] = useState("");
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    setUid(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    });
    fetch(
      `http://192.168.0.105:4000/channels/mychannel/chaincodes/electricLadger/getbill?peer=peer0.org1.example.com&fcn=queryData&args=["${uid}"]&history=true`,

      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => response.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          UID:
          <input type="text" value={uid} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>{" "}
      <br />
      {data ? (
        <div>
          {data.success ? (
            <div>
              <p>Monthly Units: {data.result.monthlyUnits}</p>
              <p>Monthly Bill: {data.result.monthlyBill}</p>
              <p>Unit Price: {data.unitPrice}</p>
              <p>Service Charges: {data.ServiceCharges}</p>
              <p>Tax: {data.tax}</p>
            </div>
          ) : (
            <p>{data.error}</p>
          )}
        </div>
      ) : null}
      {data && (
        <div>
          <PDFDownloadLink document={<PDFFile data={data} />} filename="FORM">
            {({ loading }) =>
              loading ? (
                <button>Loading Document...</button>
              ) : (
                <button>Download</button>
              )
            }
          </PDFDownloadLink>
          <PDFViewer width="800px" height="600px">
            <PDFFile data={data} />
          </PDFViewer>
        </div>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
    textAlign: "center",
    fontFamily: "Times-Roman",
    color: "grey",
  },

  image: {
    marginVertical: 10,
    marginHorizontal: 30,
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = ({ data }) => {
  const {
    result: { monthlyUnits, monthlyBill },
    unitPrice,
    ServiceCharges,
    tax,
  } = data;
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ElectricLadger Pakistan's First Blockchain Based Electricity Bill
        </Text>
        <Image style={styles.image} src={logo} />
        <Text style={styles.title}>ElectricLedger</Text>
        <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>
          Electricity Bill
        </Text>{" "}
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          Monthly Units: {monthlyUnits}
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          Monthly Bill: {monthlyBill} Rs
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          Unit Price: {unitPrice} Rs per unit
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          Service Charges: {ServiceCharges} Rs
        </Text>
        <Text style={{ fontSize: 12, marginBottom: 10 }}>Tax: {tax}</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};
