import React from "react";
import { useNavigate } from "react-router-dom";
import DangerAlert from "./Alert";
import WalletDownload from "./WalletFile";

import pic from "../images/log-in.svg";
import {
  DropOption,
  // FormContent,
  // Form,
  FormButton,
  FormInput,
  FormLabel,
  FormSelect,
  Icon,
  StyledContainer,
  StyledLeft,
  StyledRight,
  FormH1,
  FormH2,
  BoxH3,
} from "./adminElements";

export default function AdminForm(props) {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = React.useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState({});
  const [walletFile, setWalletFile] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    username: "",
    orgName: "",
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
      // const res = await fetch(`http://192.168.0.101:4000/${props.address}`, {
      const res = await fetch(`http://${props.ip}:4000/${props.address}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const response = await res.json();
      setApiResponse(() => {
        return {
          ...response,
        };
      });
      //check login or register and is it admin ot user and navigate to dashboard
      if (props.type === "login") {
        if (response.success) {
          localStorage.setItem("jwt", response.token);
          localStorage.setItem("username", response.username);
          dangerAlert();

          // props.user === "admin" && navigate("/admin-dashboard");
          props.user === "admin" && navigate("/verify-user");
        } else {
          setShowAlert(true);
        }
      }
      if (props.type === "register") {
        if (response.success) {
          localStorage.setItem("jwt", response.token);
          dangerAlert();
          // setShowSuccessAlert(true);
          setWalletFile(response.walletFile);
        } else {
          successAlert();
          // setShowAlert(true);
        }
      }
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

  React.useEffect(() => {
    setShowSuccessAlert(false);
    setShowAlert(false);
  }, []);

  React.useEffect(() => {
    async function handleSubmitEffect() {
      if (apiResponse.success) {
        setShowSuccessAlert(true);
        setSuccess(apiResponse.success);
      } else {
        if (apiResponse.success === false) {
          setShowAlert(true);
          setSuccess(false);
        }
      }
    }

    handleSubmitEffect();
    console.log(apiResponse);
  }, [apiResponse]);

  return (
    <>
      <StyledContainer>
        <Icon to="/"> &lt;Home</Icon>

        <StyledLeft>
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <image href={pic} height="102%" width="105%" />
          </svg>
        </StyledLeft>

        <StyledRight>
          {props.type === "login" && <FormH1> Admin Login </FormH1>}
          {props.type === "register" && <FormH1> Admin Register </FormH1>}
          <FormH2>Overview your billing transaction. </FormH2>
          <br></br>
          <BoxH3> Welcome To Electric Ledger Network</BoxH3>
          <br></br>

          {props.type === "login" && showAlert && (
            <DangerAlert
              formType={props.type}
              dangerAlert={dangerAlert}
              type="danger"
              res={apiResponse}
            />
          )}

          {/* show danger alert in register form */}
          {props.type === "register" && showAlert && (
            <DangerAlert
              formType={props.type}
              dangerAlert={dangerAlert}
              type="danger"
              res={apiResponse}
            />
          )}
          {/* show success alert in register form */}

          {props.type === "register" && showSuccessAlert && (
            <DangerAlert
              formType={props.type}
              successAlert={successAlert}
              res={apiResponse}
              type="success"
              user={props.user}
            />
          )}
          <form onSubmit={handleSubmit}>
            <FormLabel htmlFor="username">Enter Your Name</FormLabel>
            <FormInput
              type="text"
              id="username"
              placeholder="User name"
              onChange={handleChange}
              name="username"
              value={formData.username}
            />

            <FormLabel htmlFor="orgName">which organiation?</FormLabel>

            <FormSelect
              id="orgName"
              value={formData.orgName}
              onChange={handleChange}
              name="orgName"
            >
              <DropOption value="none">--Select--</DropOption>
              <DropOption value="Org1">Org1</DropOption>
            </FormSelect>

            <FormButton>Submit</FormButton>
            {success && (
              <WalletDownload
                walletFile={walletFile}
                success={success}
                username={apiResponse.username}
              />
            )}
          </form>
        </StyledRight>
      </StyledContainer>
    </>
  );
}
