import React from "react";
import { useNavigate } from "react-router-dom";
import DangerAlert from "./Alert";
import {
  DropOption,
  // FormContent,
  // Form,

  FormButton,
  FormInput,
  FormLabel,
  FormSelect,
} from "./LoginElements";

export default function MyForm(props) {
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = React.useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);
  const [apiResponse, setApiResponse] = React.useState({});

  const [formData, setFormData] = React.useState({
    username: "",
    orgName: "",
    cnic: "",
    type: "user",
    uid: "",
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
          localStorage.setItem("orgName", response.orgName);
          localStorage.setItem("prices", JSON.stringify(response.prices));

          dangerAlert();

          props.user === "user"
            ? navigate("/user-dashboard")
            : navigate("/admin-dashboard");
        } else {
          setShowAlert(true);
        }
      }
      if (props.type === "register") {
        if (response.success) {
          localStorage.setItem("jwt", response.token);
          dangerAlert();
          // setShowSuccessAlert(true);
        } else {
          successAlert();
          // setShowAlert(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     fetch(`http://34.165.211.237:4000/${props.address}`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     })
  //       .then((res) => res.json())
  //       .then((response) => {
  //         setApiResponse(() => {
  //           return {
  //             ...response,
  //           };
  //         });

  //         if (props.type === "login") {
  //           if (response.success) {
  //             localStorage.setItem("jwt", response.token);

  //             dangerAlert();
  //             navigate("/dashboard");
  //           } else {
  //             setShowAlert(true);
  //           }
  //         }
  //         if (props.type === "register") {
  //           if (response.success) {
  //             localStorage.setItem("jwt", response.token);
  //             dangerAlert();
  //             setShowSuccessAlert(true);
  //           } else {
  //             successAlert();
  //             setShowAlert(true);
  //           }
  //         }
  //       });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

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
      } else {
        if (apiResponse.success === false) {
          setShowAlert(true);
        }
      }
    }

    handleSubmitEffect();
    console.log(apiResponse);
  }, [apiResponse]);

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
       
        <FormLabel htmlFor="username">Enter Your Name</FormLabel>
        <FormInput
          type="text"
          placeholder="User Name"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />
        
        
        <FormLabel htmlFor="uid">Enter Uid</FormLabel>
        <FormInput
          type="text"
          placeholder="uid"
          onChange={handleChange}
          name="uid"
          value={formData.uid}
        />
        
        <FormLabel htmlFor="cnic">CNIC</FormLabel>
        <FormInput
          type="text"
          placeholder="cnic"
          onChange={handleChange}
          name="cnic"
          value={formData.cnic}
        />
        
        <FormLabel htmlFor="orgName">Which Organiation?</FormLabel>
        
        <FormSelect
          id="orgName"
          value={formData.orgName}
          onChange={handleChange}
          name="orgName"
        >
          <DropOption value="none">--Select--</DropOption>
          <DropOption value="Org1">Org1</DropOption>
        </FormSelect>
        
        <FormButton>Login</FormButton>
      </form>
    </>
  );
}
