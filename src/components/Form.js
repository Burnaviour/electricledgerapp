import React from "react";
// import { useNavigate } from "react-router-dom";
import DangerAlert from "./Alert";

export default function MyForm(props) {
  // const navigate = useNavigate();
  const [showAlert, setShowAlert] = React.useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);

  React.useEffect(() => {
    setShowSuccessAlert(false);
  }, []); // The empty array ensures that this effect only runs on mount

  const [apiResponse, setApiResponse] = React.useState({
    success: true,
  });

  const [formData, setFormData] = React.useState({
    username: "",
    orgName: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      fetch(`http://34.165.211.237:4000/${props.address}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((response) => {
          setApiResponse(response);

          if (response.success) {
            localStorage.setItem("jwt", response.token);
            alert(`Register User in Wallet :${formData.username}`);
            setShowSuccessAlert(true);
          } else {
            setShowAlert(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  const alert = () => {
    setShowAlert(false);
    setShowSuccessAlert(false);
  };

  return (
    <>
      {showAlert && (
        <DangerAlert alert={alert} type="danger" msg={apiResponse.message} />
      )}
      {showSuccessAlert && (
        <DangerAlert alert={alert} type="success" msg={apiResponse.message} />
      )}
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="text"
          placeholder="User name"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />
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
      </form>
    </>
  );
}
