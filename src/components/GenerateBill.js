import React, { useEffect, useState } from "react";
// import { PDFViewer } from "@react-pdf/renderer";
import logo from "../assets/logo.png";
import Alert from "react-bootstrap/Alert";

import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  // PDFViewer,
} from "@react-pdf/renderer";

export default function GenerateBill(props) {
  return (
    <>
      <h1>Generate Bill</h1>
      <h1>Organization ElectricLadger</h1>
      <GenerateMyBill ip={props.ip} />
    </>
  );
}

const GenerateMyBill = (props) => {
  const [uid, setUid] = useState("");
  const [data, setData] = useState({ success: false });
  const [showErrorAlert, setShowErrorAlert] = useState({ error: false });
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleChange = (event) => {
    setUid(event.target.value);
  };
  const dangerAlert = () => {
    setShowErrorAlert({ error: false });
  };
  const successAlert = () => {
    setShowSuccessAlert(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    });
    try {
      const response = await fetch(
        `http://${props.ip}:4000/channels/mychannel/chaincodes/electricledger/getbill?peer=peer0.org1.example.com&fcn=queryData&args=["${uid}"]&history=true`,
        {
          method: "GET",
          headers: headers,
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        if (data.success) {
          console.log(data);
          setData(data);
          setShowSuccessAlert(true);
        } else if (!data.success) {
          setShowErrorAlert((prevData) => {
            return {
              ...prevData,
              message: data.result,
              error: true,
            };
          });
        }
      } else if (response.status === 401) {
        setShowErrorAlert((prevData) => {
          return {
            ...prevData,
            message: "Session Expired Please Login First",
            error: true,
          };
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    setData({
      success: false,
    });
    setShowErrorAlert({
      error: false,
    });
    setShowSuccessAlert(false);
  }, [uid]);

  return (
    <div>
      <div>
        {showErrorAlert.error && (
          <Alert
            className="mt-5"
            variant="danger"
            onClose={dangerAlert}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{showErrorAlert.message}</p>
          </Alert>
        )}

        {showSuccessAlert && (
          <Alert
            className="mt-5"
            variant="success"
            onClose={successAlert}
            dismissible
          >
            <Alert.Heading>Success!</Alert.Heading>
            <p>{"Succesfully Reterived User Bill"}</p>
          </Alert>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          UID:
          <input type="text" value={uid} onChange={handleChange} />
        </label>
        <br /> <br />
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
      {data.success && (
        <div>
          <PDFDownloadLink document={<PDFFile data={data} />} filename="FORM">
            {({ loading }) =>
              loading ? (
                <button>Loading Document...</button>
              ) : (
                <button>Download Bill</button>
              )
            }
          </PDFDownloadLink>{" "}
          <br /> <br />
          {/* view pdf on page for testing */}
          {/* <PDFViewer width="1200px" height="700px">
            <PDFFile data={data} />
          </PDFViewer> */}
        </div>
      )}
    </div>
  );
};

// const styles = StyleSheet.create({
//   body: {
//     paddingTop: 35,
//     paddingBottom: 65,
//     paddingHorizontal: 35,
//   },
//   title: {
//     fontSize: 30,
//     marginBottom: 50,
//     textAlign: "center",
//     fontFamily: "Times-Roman",
//     color: "grey",
//   },

//   image: {
//     marginVertical: 10,
//     marginHorizontal: 30,
//     width: 100,
//     height: 100,
//   },
//   header: {
//     fontSize: 12,
//     marginBottom: 20,
//     textAlign: "center",
//     color: "grey",
//   },
//   pageNumber: {
//     position: "absolute",
//     fontSize: 12,
//     bottom: 30,
//     left: 0,
//     right: 0,
//     textAlign: "center",
//     color: "grey",
//   },
// });
const styles = StyleSheet.create({
  body: {
    padding: 20,
  },
  headers: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  image: {
    marginVertical: 10,
    marginHorizontal: 30,
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 30,
    marginBottom: 50,
    textAlign: "center",
    fontFamily: "Times-Roman",
    color: "grey",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "Times-Roman",
    color: "grey",
  },
  table: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid gray",
    marginTop: 100,
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    border: "2px solid gray",
  },
  tableCell: {
    width: "20%",
    fontSize: 12,
    textAlign: "center",
    border: "2px solid gray",
    padding: 10,
  },
  text: {
    fontSize: 12,
  },
  info: {
    marginBottom: 20,
  },
});

const PDFFile = ({ data }) => {
  const {
    result: { monthlyUnits, monthlyBill },
    unitPrice,
    ServiceCharges,
    tax,
    name,
    uid,
    address,
  } = data;

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.headers} fixed>
          ElectricLedger Pakistan's First Blockchain Based Electricity Bill
        </Text>
        <Image style={styles.image} src={logo} />
        <Text style={styles.title}>ElectricLedger</Text>
        <Text style={styles.header}>Electricity Bill</Text>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={{ ...styles.tableCell, width: "100%" }}>Name</Text>
            <Text style={{ ...styles.tableCell, width: "100%" }}>Address</Text>
            <Text style={{ ...styles.tableCell, width: "100%" }}>User ID</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={{ ...styles.tableCell, width: "100%" }}>{name}</Text>
            <Text style={{ ...styles.tableCell, width: "100%" }}>
              {address}
            </Text>
            <Text style={{ ...styles.tableCell, width: "100%" }}>{uid}</Text>
          </View>
        </View>

        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Unit Consumed</Text>
            <Text style={styles.tableCell}>Unit Price</Text>
            <Text style={styles.tableCell}>Service Charges</Text>
            <Text style={styles.tableCell}>Tax</Text>
            <Text style={styles.tableCell}>Total Bill</Text>
          </View>

          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{monthlyUnits}</Text>
            <Text style={styles.tableCell}>{unitPrice} Rs per unit</Text>
            <Text style={styles.tableCell}>{ServiceCharges} Rs</Text>
            <Text style={styles.tableCell}>{tax} Rs</Text>
            <Text style={styles.tableCell}>{monthlyBill} Rs</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
