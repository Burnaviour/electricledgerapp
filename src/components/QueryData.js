import Alert from "react-bootstrap/Alert";
import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export default function QueryData() {
  const [formData, setFormData] = React.useState({
    args: " ",
  });
  const [showErrorAlert, setShowErrorAlert] = React.useState({
    message: "",
    error: false,
  });
  const [apiResponse, setApiResponse] = React.useState({
    error: null,
    errorData: null,
    result: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      if (name === "args") {
        return {
          args: value.trim(),
        };
      } else
        return {
          ...prevFormData,
        };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log(formData);
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      });
      fetch(
        `http://192.168.0.103:4000/channels/mychannel/chaincodes/electricLadger?args=["${formData.args}"]&peer=peer0.org1.example.com&fcn=queryData&history=false`,
        {
          method: "GET",
          headers: headers,
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return Promise.reject({
              status: response.status, // 404
              statusText: response.statusText, // Not Found
            });
          }
        })
        .then((data) => {
          // console.log(data);
          setApiResponse((prevData) => {
            return {
              ...prevData,
              ...data,
            };
          });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      setShowErrorAlert(() => {
        return {
          error: true,
          ...error,
        };
      });
    }
  }
  const dangerAlert = () => {
    setShowErrorAlert(false);
  };

  useEffect(() => {
    async function checkEmpty() {
      await new Promise((resolve) => setTimeout(resolve, 10));
      console.log(apiResponse);
      if (apiResponse.result && apiResponse.result.length === 0) {
        setShowErrorAlert((prevData) => {
          return {
            ...prevData,
            message: "not Found Please enter Valid User id",
            error: true,
          };
        });
      }
    }

    checkEmpty();
  }, [apiResponse]);

  // function checkEmpty() {
  //   console.log(apiResponse);
  //   if (apiResponse.result && apiResponse.result.length === 0) {
  //     setShowErrorAlert((prevData) => {
  //       return {
  //         ...prevData,
  //         message: "not Found Please enter Valid User id",
  //         error: true,
  //       };
  //     });
  //   }
  // }

  useEffect(() => {
    setShowErrorAlert(false);
  }, [formData]);

  return (
    <>
      {showErrorAlert.error && (
        <Alert
          className="mt-5"
          variant="danger"
          onClose={dangerAlert}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            The Given {formData.args} {showErrorAlert.message}
          </p>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="uid">Please enter your user id here</label>
        <input
          id="uid"
          type="text"
          placeholder="User ID"
          onChange={handleChange}
          name="args"
          value={formData.args}
        />
        {/* <br />
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
        </select> */}
        <br />
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}
