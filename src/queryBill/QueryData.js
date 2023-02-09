import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import DataDiv from "./Data";
import { Switch } from "antd";
// import { useNavigate } from "react-router-dom";
import {
  Row,
  DataLabel,
  // DataContainer3,
  DataContainerHistory,
  FormInput,
  // Button1,
  Button12,
  DivCenter,
} from "./querybillElements";

import { FormLabel } from "../Login/LoginElements";

export default function QueryData() {
  const [IsHistory, setHistory] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    args: "",
  });
  const [showErrorAlert, setShowErrorAlert] = React.useState({
    message: "",
    error: false,
    check: false,
    //check  for custom message in red alert
  });
  const [apiResponse, setApiResponse] = React.useState({
    error: null,
    errorData: null,
    result: "",
    success: false,
  });
  const [prevSuccess, setPrevSuccess] = React.useState(apiResponse.success);

  function handleSubmit(event) {
    event.preventDefault();
    if (formData.args.length === 0) {
      setShowErrorAlert((prevData) => {
        return {
          ...prevData,
          message: "Please enter User id",
          error: true,
          check: true,
        };
      });
      setApiResponse((prevData) => {
        return {
          ...prevData,
          success: false,
        };
      });
      return;
    }
    try {
      console.log(formData);
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      });
      fetch(
        `http://${
          process.env.REACT_APP_IP
        }:4000/channels/mychannel/chaincodes/electricledger?args=["${
          formData.args
        }"]&peer=peer0.org1.example.com&fcn=queryData&history=${
          IsHistory ? "true" : "false"
        }`,
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
          console.log("api call data", data);
          setApiResponse((prevData) => {
            return {
              ...prevData,
              ...data,
              success: true,
            };
          });
        })
        .catch((error) => {
          if (error.status === 401) {
            setShowErrorAlert((prevData) => {
              return {
                ...prevData,
                message: "Session Expired Please Login First",
                error: true,
                check: true,
              };
            });
          }
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
  function toggleHistory() {
    setHistory((prevMode) => !prevMode);
  }

  function handleClick(event) {
    if (event.target.type === "submit") {
      handleSubmit(event);
    }
    setLoading(true);
    // simulate a delay
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }

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

  useEffect(() => {
    if (prevSuccess !== apiResponse.success) {
      setPrevSuccess(apiResponse.success);
    }
  }, [apiResponse.success, prevSuccess]);

  const dangerAlert = () => {
    setShowErrorAlert(false);
  };

  useEffect(() => {
    async function checkEmpty() {
      await new Promise((resolve) => setTimeout(resolve, 10));

      if (apiResponse.result && apiResponse.result.length === 0) {
        setShowErrorAlert((prevData) => {
          return {
            ...prevData,
            message: "not Found Please enter Valid User id",
            error: true,
          };
        });
        setApiResponse((prevData) => {
          return {
            ...prevData,
            error: null,
            errorData: null,
            result: "",
            success: false,
          };
        });
      }
    }

    checkEmpty();
    // console.log(apiResponse);
  }, [apiResponse]);

  useEffect(() => {
    setShowErrorAlert((prevData) => {
      return {
        ...prevData,
        error: false,

        check: false,
      };
    });
  }, [formData]);
  return (
    <>
      <DivCenter>
        {showErrorAlert.error && (
          <Alert
            className="mt-5"
            variant="danger"
            onClose={dangerAlert}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              {showErrorAlert.check
                ? showErrorAlert.message
                : `The Given ${formData.args} ${showErrorAlert.message}`}
            </p>
          </Alert>
        )}
      </DivCenter>

      <form onSubmit={handleSubmit}>
        <br />
        <DivCenter>
          <Row>
            <DataLabel>
              <FormLabel>
                Please enter your user id here:
                <FormInput
                  type="text"
                  id="uid"
                  value={formData.args}
                  placeholder="User ID"
                  name="args"
                  // label="Please enter your user id here"
                  onChange={handleChange}
                />
              </FormLabel>
            </DataLabel>
            <DataContainerHistory>
              <DataLabel>
                <DataLabel htmlFor="switch">History</DataLabel>
                <Switch id="switch" onClick={toggleHistory} />
                <Button12
                  variant="primary"
                  type="submit"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                  value="Submit"
                >
                  {" "}
                  {isLoading ? "Loading…" : "Submit"}{" "}
                </Button12>
              </DataLabel>
            </DataContainerHistory>
          </Row>
        </DivCenter>

        {/* <DataLabel htmlFor="switch">History</DataLabel>
          <Switch id="switch" onClick={toggleHistory} />


          <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "Submit"}
        </Button> */}

        {/* <label htmlFor="uid">Please enter your user id here</label> <br />
        <input
          id="uid"
          type="text"
          placeholder="User ID"
          onChange={handleChange}
          name="args"
          value={formData.args}
        />
        <br />
        <br />
        <label htmlFor="switch">History</label>
        <Switch id="switch" onClick={toggleHistory} />
        <br /> <br />
        <Button
          variant="primary"
          type="submit"
          disabled={isLoading}
          onClick={!isLoading ? handleClick : null}
        >
          {isLoading ? "Loading…" : "Submit"}
        </Button> */}
      </form>
      <br />
      <br />

      {apiResponse.success && <DataDiv data={apiResponse} />}
    </>
  );
}
