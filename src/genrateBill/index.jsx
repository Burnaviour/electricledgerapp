import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { PDFViewer } from "@react-pdf/renderer";
import logo from "../assets/logo.png";
import BillDownload from "../images/BillDownload.svg";
import Download from "../images/Download.svg";
import Alert from "react-bootstrap/Alert";
//import { useNavigate } from "react-router-dom";
import hellopic from "../images/Hello.svg";
import {
  Welcome,
  Background,
  Row,
  DataLabel,
  DataLabel1,
  DivCenter,
  DataContainer2,
  DataContainer3,
  DataText,
  Container1,
  LeftSection,
  Correction,
  DataContainer,
  RightSection,
  LayoutImage1,
  Button2,
  Button3,
  LayoutImage2,
  WelcomeText,
  Flexer,
  HeadTiltle,
  HeadTiltle2,
  LayoutImage,
  DataContainer51,
  FormInput,
  Button1,
  DataRow,
} from "./generateElements";

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
import { FormLabel } from "react-bootstrap";

export default function GenerateBill(props) {
  return (
    <>
      <GenerateMyBill ip={process.env.REACT_APP_IP} />
    </>
  );
}

const GenerateMyBill = (props) => {
  const [uid, setUid] = useState("");
  const [data, setData] = useState({ success: false });
  //   const [data, setData] = useState({success: true,tax:5,ServiceCharges:10,unitPrice:20,result:{
  //     CurrentUsage: 0,
  //     isMonthly:false

  // } });
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
    <>
      <Background>
        <DivCenter>
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

          <Welcome>
            <WelcomeText>
              <HeadTiltle>Generate Bill</HeadTiltle>
              <HeadTiltle2>Current bill will be generated.</HeadTiltle2>
            </WelcomeText>
            <LayoutImage src={hellopic} />
          </Welcome>

          <Container1>
            <LeftSection>
              <Correction>Sub Text</Correction>

              {/* <Correction>Sub Text</Correction> */}
              <form onSubmit={handleSubmit}>
                <Row>
                  <DataLabel>
                    <FormLabel>
                      UID:
                      <FormInput
                        type="text"
                        value={uid}
                        label="Enter Your UID Here."
                        onChange={handleChange}
                      />
                    </FormLabel>
                  </DataLabel>
                  <DataContainer3>
                    <DataLabel>
                      <Button1 type="submit" value="Submit">
                        {" "}
                        Submit{" "}
                      </Button1>
                    </DataLabel>
                  </DataContainer3>
                </Row>
              </form>

              {data.success && !data.result.isMonthly && (
                <div>
                  <DataContainer51>
                    <DataLabel1>
                      Monthly Bill is not generated yet but you can see Your
                      Current usage
                    </DataLabel1>
                  </DataContainer51>
                  <br></br>
                  <DataLabel>Your Current usage:</DataLabel>
                  <DataContainer>
                    <DataText>{data.result.CurrentUsage}</DataText>
                  </DataContainer>

                  {/* <p>
            Monthly Bill is not generated yet but you can see Your Current usage
          </p>
          <p>Current Units usage: {data.result.CurrentUsage}</p> */}
                </div>
              )}

              {data ? (
                <div>
                  {data.success && data.result.isMonthly ? (
                    <div>
                      <DataRow>
                        <DataLabel>Monthly Bill</DataLabel>
                        <DataContainer>
                          <DataText>{data.result.monthlyBill} Rs</DataText>
                        </DataContainer>
                      </DataRow>

                      <Row>
                        <DataRow>
                          <DataLabel>Monthly Units</DataLabel>
                          <DataContainer2>
                            <DataText>{data.result.monthlyUnits}</DataText>
                          </DataContainer2>
                        </DataRow>

                        <DataRow>
                          <DataLabel>Currently Used Units</DataLabel>
                          <DataContainer2>
                            <DataText>{data.result.CurrentUsage}</DataText>
                          </DataContainer2>
                        </DataRow>

                        <DataRow>
                          <DataLabel>Unit Price (pkr) </DataLabel>
                          <DataContainer2>
                            <DataText>{data.unitPrice} Rs</DataText>
                          </DataContainer2>
                        </DataRow>
                      </Row>

                      <Row>
                        <DataRow>
                          <DataLabel>Total Tax Cost (pkr)</DataLabel>
                          <DataContainer2>
                            <DataText>{data.result.tax} Rs</DataText>
                          </DataContainer2>
                        </DataRow>

                        <DataRow>
                          <DataLabel>Service Charges (pkr)</DataLabel>
                          <DataContainer2>
                            <DataText>{data.ServiceCharges} Rs</DataText>
                          </DataContainer2>
                        </DataRow>
                        <DataRow>
                          <DataLabel>Tax</DataLabel>
                          <DataContainer2>
                            <DataText>{data.tax} Rs</DataText>
                          </DataContainer2>
                        </DataRow>
                      </Row>
                    </div>
                  ) : (
                    <p>{data.error}</p>
                  )}
                </div>
              ) : null}
            </LeftSection>

            {data.success && data.result.isMonthly && (
              <div>
                <RightSection>
                  <LayoutImage1 src={BillDownload} />
                  <Flexer>
                    <Link to="/user-dashboard">
                      <Button3>Dashboard</Button3>
                    </Link>
                    <PDFDownloadLink
                      document={<PDFFile data={data} />}
                      filename="FORM"
                    >
                      {({ loading }) =>
                        loading ? (
                          <Button2>Loading Document...</Button2>
                        ) : (
                          <Button2>
                            Download Bill <LayoutImage2 src={Download} />
                          </Button2>
                        )
                      }
                    </PDFDownloadLink>{" "}
                  </Flexer>
                </RightSection>
              </div>
            )}
          </Container1>
        </DivCenter>
      </Background>
    </>
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
