import React from "react";
import { useNavigate } from "react-router-dom";
import DangerAlert from "./Alert";
import WalletDownload from "./WalletFile";
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
      <h1>Register Organization Memeber </h1>

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
        <br />
        <label htmlFor="username">Enter Your Name</label>
        <input
          type="text"
          id="username"
          placeholder="User name"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />
        <br />
        <br />
        <label htmlFor="orgName">which organiation?</label>
        <br />
        <select
          id="orgName"
          value={formData.orgName}
          onChange={handleChange}
          name="orgName"
        >
          <option value="none">--Select--</option>
          <option value="Org1">Org1</option>
        </select>
        <br />
        <br />

        <button>Submit</button>
        {success && (
          <WalletDownload
            walletFile={walletFile}
            success={success}
            username={apiResponse.username}
          />
        )}
      </form>
    </>
  );
}
