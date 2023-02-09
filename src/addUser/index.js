import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import hellopic from "../images/Hello.svg";
import {
Welcome, 
Background, 
// DivCenter,
WelcomeText,
HeadTiltle,
HeadTiltle2,
LayoutImage,
}from "./addUserElements";

import { 
  Container1,
  LeftSection,
  Correction,
  DataRow,
  DropOption,
  DataLabel,
  RightSection,
  FormSelect,
  DataText1,
  Button1,
  DivCenter,
  Button21,

   } from "./addUserElements";



export default function AddUser() {
  return (
    <>
      
    

      

      <div>
        {/* <h1> Add User </h1>
        <Button as={Link} variant="success" to="/admin-dashboard">
          Dashboard
        </Button> */}
        {/* <MyForm type="addUser" address="users/addUser" /> */}
        <AdduserData />
      </div>
    </>
  );
}

function AdduserData() {
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: false,
  });

  const [apiResponse, setApiResponse] = useState({});
  const [formData, setFormData] = useState({
    fcn: "writeData",
    chaincodeName: "electricLadger",
    channelName: "mychannel",
    orgName: "Org1",
    name: " ",
    address: " ",
    units: 0,
    cnic: " ",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,

        [name]: value,
      };
    });
  }
  async function handleSubmit(event) {
    console.log(formData);
    console.log("handleSubmit");
    event.preventDefault();

    try {
      //let ip="34.165.211.237";
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      });
      const res = await fetch(
        `http://${process.env.REACT_APP_IP}:4000/channels/mychannel/chaincodes/electricledger/invoke`,

        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(formData),
        }
      );
      if (res.status === 401) {
        setError({
          message: "Seassion Expired Please Login First",
          error: true,
        });
        setShowAlert(true);
      }
      const response = await res.json();
      setApiResponse(() => {
        return {
          ...response,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }
  const dangerAlert = () => {
    setShowAlert(false);
  };
  const successAlert = () => {
    setShowSuccessAlert(false);
  };
  useEffect(() => {
    dangerAlert();
    successAlert();
  }, [formData]);

  useEffect(() => {
    console.log("useEffect");
    setFormData({
      fcn: "writeData",
      chaincodeName: "electricLadger",
      channelName: "mychannel",
      orgName: "Org1",
      name: " ",
      address: " ",
      units: 0,
      cnic: " ",
    });
  }, []);

  useEffect(() => {
    if (apiResponse.success) {
      setShowSuccessAlert(true);
      console.log(apiResponse);
    } else {
      if (apiResponse.success === false) {
        setShowAlert(true);
        setError({
          message: apiResponse.message,
          error: true,
        });
      }
    }
  }, [apiResponse]);

  return (
    <>
    <Background>
    <DivCenter>

    <Welcome>
      <WelcomeText> 
          <HeadTiltle>Add User</HeadTiltle>
          <HeadTiltle2>Add new users here.</HeadTiltle2>
      </WelcomeText>
      <LayoutImage src={hellopic} />
      </Welcome> 
      <DivCenter>
      </DivCenter>

      <div>
        {showAlert && (
          <Alert
            className="mt-5"
            variant="danger"
            onClose={dangerAlert}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{error ? error.message : apiResponse.message}</p>
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
            <p>{apiResponse.result.message}</p>
          </Alert>
        )}
      </div>

      <form onSubmit={handleSubmit}>
      <Container1>
        <LeftSection>

        {/* <form onSubmit={handleSubmit}> */}
        <Correction>Sub Text</Correction>

        {/* <Correction>Sub Text</Correction> */}

        <DataRow>
          <DataLabel htmlFor="name">Name</DataLabel>
          <br></br>
            <DataText1
              type="text"
              placeholder="New User Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />

        </DataRow>

        <DataRow>
          <DataLabel  htmlFor="address">Address</DataLabel>
          <br></br>
            <DataText1
            type="text"
            placeholder="Address"
            onChange={handleChange}
            name="address"
            value={formData.address}
            />
            
        </DataRow>

        <DataRow>
          <DataLabel htmlFor="cnic">Cnic</DataLabel>
            <br></br>

            <DataText1
            type="text"
            placeholder="cnic"
            onChange={handleChange}
            name="cnic"
            value={formData.cnic}
            />
            
        </DataRow>
            

        </LeftSection>
        <RightSection>


        <DataRow>
          <DataLabel  htmlFor="orgName">which organiation?</DataLabel >
          <br></br>
          <FormSelect
          id="orgName"
          value={formData.orgName}
          onChange={handleChange}
          name="orgName"
        >
          <DropOption value="none">--Select--</DropOption>
          <DropOption value="Org1">Org1</DropOption>
        </FormSelect>

        </DataRow>

        <DataRow>
          <DataLabel  htmlFor="fcn">which method you want to use ?</DataLabel>
          <br></br>
          <FormSelect
          id="fcn"
          value={formData.fcn}
          onChange={handleChange}
          name="fcn"
        >
          <DropOption value="none">--Select--</DropOption>
          <DropOption value="writeData">writeData</DropOption>
        </FormSelect>
            
        </DataRow>

        <DataRow>
          <DataLabel htmlFor="chaincodeName">Select ChainCode name ?</DataLabel>
            <br></br>
            <FormSelect
          id="chaincodeName"
          value={formData.chaincodeName}
          onChange={handleChange}
          name="chaincodeName"
        >
           <DropOption value="none">--Select--</DropOption>
           <DropOption value="electricledger">Electricledger</DropOption>
        </FormSelect>
            
        </DataRow>


       

        </RightSection>

        

      </Container1>
      <DataRow>
      <br></br>

      <Link to="/admin-dashboard">
      <Button21>Dashboard</Button21></Link>
        <Button1>Submit</Button1>
        
      
        </DataRow>
      </form>
      </DivCenter>
      </Background>
    </>
  );
}
