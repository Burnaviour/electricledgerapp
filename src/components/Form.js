import React from "react";
import { useNavigate } from "react-router-dom";
import DangerAlert from "./Alert";

export default function MyForm(props) {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = React.useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState({});

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
          setApiResponse(() => {
            return {
              ...response,
            };
          });

          if (props.type === "login") {
            if (response.success) {
              localStorage.setItem("jwt", response.token);

              dangerAlert();
              navigate("/dashboard");
            } else {
              setShowAlert(true);
            }
          }
          if (props.type === "register") {
            if (response.success) {
              localStorage.setItem("jwt", response.token);
              dangerAlert();
              setShowSuccessAlert(true);
            } else {
              successAlert();
              setShowAlert(true);
            }
          }
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

  React.useEffect(() => {
    setShowSuccessAlert(false);
    setShowAlert(false);
  }, []);
  return (
    <>
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
        />
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
