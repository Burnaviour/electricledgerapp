import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
import red from "../images/red.svg";
import green from "../images/green.svg";
import blue from "../images/blue.svg";
import Clock from "../images/Clock.svg";
import hellopic from "../images/Hello.svg";
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
  LeftSectionRow1,
  ImageContainer,
  Image,
  // imageSource,
  Text,
  SubText,
  TextContainer,
  RightSection,
  Container1,
  Button1,
  Row,
  Row1,
  DataContainer,
  DataContainer2,
  DataLabel,
  DataRow,
  Correction,
  DataText,
  BottomRow1,
  Image2,
} from "./userElements";

export default function UserDashboard() {
  const navigator = useNavigate();
  function handleClick(e) {
    if (e.target.id === "btn-1") {
      navigator("/user-query-bill");
    }
    if (e.target.id === "btn-2") {
      navigator("/generate-bill");
    }
    if (e.target.id === "btn-3") {
      navigator("/user-query-history");
    }
  }

  const prices = JSON.parse(localStorage.getItem("prices"));
  const cnic = JSON.parse(localStorage.getItem("result"))[0].value.cnic;
  return (
    <>
      <Background>
        <DivCenter>
          <Welcome>
            <WelcomeText>
              <HeadTiltle>Hello {localStorage.getItem("username")}!</HeadTiltle>
              <HeadTiltle2>It’s good to see you again.</HeadTiltle2>
            </WelcomeText>
            <LayoutImage src={hellopic} />
          </Welcome>
          <Container1>
            <LeftSection>
              <Correction>Sub Text</Correction>

              {/* <Correction>Sub Text</Correction> */}
              <LeftSectionRow1>
                <ImageContainer>
                  <Image src={red} />
                  <TextContainer>
                    <Text>Current Day Usage</Text>
                    <SubText>Recent value on the Blockchain</SubText>
                  </TextContainer>
                </ImageContainer>

                <ImageContainer>
                  <Image2 src={Clock} />
                  <SubText>Current Day</SubText>
                </ImageContainer>
                <Button1
                  id="btn-1"
                  variant="success"
                  // className="mx-4 my-4"
                  type="button"
                  onClick={handleClick}
                >
                  Current Bill
                </Button1>
              </LeftSectionRow1>

              <LeftSectionRow1>
                <ImageContainer>
                  <Image src={green} />
                  <TextContainer>
                    <Text>History</Text>
                    <SubText>All time transaction history.</SubText>
                  </TextContainer>
                </ImageContainer>

                <ImageContainer>
                  <Image2 src={Clock} />
                  <SubText>All Times</SubText>
                </ImageContainer>
                <Button1
                  id="btn-3"
                  variant="success"
                  // className="mx-4 my-4"
                  type="button"
                  onClick={handleClick}
                >
                  Bills History
                </Button1>
              </LeftSectionRow1>

              <LeftSectionRow1>
                <ImageContainer>
                  <Image src={blue} />
                  <TextContainer>
                    <Text>Genrate Bill</Text>
                    <SubText>Current bill will be genrate</SubText>
                  </TextContainer>
                </ImageContainer>

                <ImageContainer>
                  <Image2 src={Clock} />
                  <SubText>30 Days</SubText>
                </ImageContainer>
                <Button1
                  id="btn-2"
                  variant="success"
                  // className="mx-4 my-4"
                  type="button"
                  onClick={handleClick}
                >
                  Generate Bill
                </Button1>
              </LeftSectionRow1>
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
                    <DataText>{prices.tax} %</DataText>
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
                    <DataText>{localStorage.getItem("orgName")}</DataText>
                  </DataContainer2>
                </DataRow>
              </Row>
            </RightSection>
          </Container1>

          <Row1>
            <BottomRow1>
              <Text>Do you know about us ? </Text>
              <Link to="/">
                <Button1>Home</Button1>
              </Link>
            </BottomRow1>
          </Row1>
        </DivCenter>
      </Background>
    </>
  );
}
