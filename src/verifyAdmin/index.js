import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import pic from "../images/adminQW.svg"
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { FormButton,  
  Icon,
  StyledContainer,
  StyledLeft,
  StyledRight,
  FormH1,
  FormH2,
  BoxH3,
   } from "./adminElements";


const WalletUpload = (props) => {
  let navigator = useNavigate();
  const [file, setFile] = useState(null);
  // const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: false,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [res, setRes] = useState({ success: null, message: "" });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const dangerAlert = () => {
    setError(() => ({ message: null, error: false }));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError({
        message: "please load file first then click upload",
        error: true,
      });
      return;
    }
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("username", localStorage.getItem("username"));

      const res = await axios.post(
        `http://${props.ip}:4000/api/verifyWallet`,
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );

      if (res.data.success) {
        setRes(res.data);
        dangerAlert();
      } else {
        setRes(res.data);
      }
    } catch (err) {
      setError({
        message: err,
        error: true,
      });
    }
  };

  React.useEffect(() => {
    async function handleSubmitEffect() {
      if (res.success) {
        setShowAlert(true);
        setTimeout(() => {
          navigator("/admin-dashboard");
        }, 3000);
      } else {
        if (res.success === false) {
          setError({
            message: res.message,
            error: true,
          });
        }
      }
    }

    handleSubmitEffect();
    console.log(res);
  }, [res, navigator]);

  return (
    <>

<StyledContainer>
      <Icon to="/"> &lt;Home</Icon>

      <StyledLeft>
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <image href={pic} height="102%" width="105%"/>
            </svg>
      </StyledLeft>
      
      <StyledRight>
        <FormH1> Verify your Identity </FormH1>
          <FormH2> A step to confirm your authenticity.</FormH2>
          <br></br>
          <BoxH3> Electric Ledger Admin Dashboard</BoxH3>
          <br></br>




      {error.error && (
        <Alert
          className="mt-5"
          variant="danger"
          onClose={dangerAlert}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error.error ? error.message : res.message}</p>
        </Alert>
      )}
      {showAlert && (
        <Alert
          className="mt-5"
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          <Alert.Heading>Success!</Alert.Heading>
          <p>{res.message} moving to Dashboard</p>
          <Spinner animation="border" variant="Success" />
        </Alert>
      )}

      <form onSubmit={handleUpload}>
      <br />
        <input type="file" onChange={handleFileChange} /> <br /> 
        <FormButton type="submit">Upload Signature</FormButton>



      </form>
      </StyledRight>
    </StyledContainer>
    </>
  );
};

export default WalletUpload;
