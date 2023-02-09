import React from "react";
import hellopic from "../images/Hello.svg";
import { Link } from "react-router-dom";
// import RUserDashboard from "./UserDashboard";
import {
  Background,
  DivCenter,
  HeadTiltle,
  HeadTiltle2,
  Welcome,
  WelcomeText,
  LayoutImage,
  LeftSection,
  RightSection,
  Container1,
  Row,
  Row1,
  BottomRow1,
  Text,
  Button1,
  DataContainer,
  DataContainer2,
  DataLabel,
  DataRow,
  Correction,
  DataText,
  DataText1,
} from "./userbillElements";

const UserBillData = () => {
  const result = JSON.parse(localStorage.getItem("result"));
  const apiResponse = { result: result };
  const prices = JSON.parse(localStorage.getItem("prices"));
  const cnic = JSON.parse(localStorage.getItem("result"))[0].value.cnic;

  // const prices = {servicesCharges:20,unitPrice:39,tax:45};
  // const cnic = "36302-78945612-9";//data.getItem("result")[0].value.cnic"";
  var resultHistory1 = null;

  return (
    <>
      {getResults(apiResponse)}

      <Background>
        <DivCenter>
          <Welcome>
            <WelcomeText>
              <HeadTiltle>Current Day Usage</HeadTiltle>
              <HeadTiltle2>Recent value on the Blockchain </HeadTiltle2>
            </WelcomeText>
            <LayoutImage src={hellopic} />
          </Welcome>
          <Container1>
            <LeftSection>
              <Correction>Sub Text</Correction>

              {/* <Correction>Sub Text</Correction> */}

              <DataRow>
                <DataLabel>Name</DataLabel>
                <DataContainer>
                  <DataText1>{resultHistory1.Name}</DataText1>
                </DataContainer>
              </DataRow>

              <DataRow>
                <DataLabel>Address</DataLabel>
                <DataContainer>
                  <DataText1>{resultHistory1.Address}</DataText1>
                </DataContainer>
              </DataRow>

              <DataRow>
                <DataLabel>Units</DataLabel>
                <DataContainer>
                  <DataText1>{resultHistory1.Units}</DataText1>
                </DataContainer>
              </DataRow>
            </LeftSection>

            <RightSection>
              <DataRow>
                <DataLabel>CNIC</DataLabel>
                <DataContainer>
                  <DataText>{cnic}</DataText>
                </DataContainer>
              </DataRow>

              <Row>
                <DataRow>
                  <DataLabel>Tax Percentage</DataLabel>
                  <DataContainer2>
                    <DataText>{prices.tax}%</DataText>
                  </DataContainer2>
                </DataRow>
                <DataRow>
                  <DataLabel>Unit Price (pkr) </DataLabel>
                  <DataContainer2>
                    <DataText>{prices.unitPrice}</DataText>
                  </DataContainer2>
                </DataRow>
              </Row>
              <Row>
                <DataRow>
                  <DataLabel>Service Charges (pkr)</DataLabel>
                  <DataContainer2>
                    <DataText>{prices.servicesCharges}</DataText>
                  </DataContainer2>
                </DataRow>
                <DataRow>
                  <DataLabel>Organisation</DataLabel>
                  <DataContainer2>
                    <DataText>Org1</DataText>
                  </DataContainer2>
                </DataRow>
              </Row>
            </RightSection>
          </Container1>

          <Row1>
            <BottomRow1>
              <Text>Go back to Dashboard.</Text>
              <Link to="/user-dashboard">
                <Button1>Dashboard</Button1>
              </Link>
            </BottomRow1>
          </Row1>
        </DivCenter>
      </Background>
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
