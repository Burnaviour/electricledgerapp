import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
export default function UpdateUserData() {
  return (
    <>
      <div>
        <h1> Update User Data </h1>
        <Button as={Link} variant="success" to="/admin-dashboard">
          Dashboard
        </Button>
        <br />
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
    chaincodeName: "electricledger",
    channelName: "mychannel",
    orgName: "Org1",
    name: " ",
    address: " ",
    uid: " ",
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
        `http://${process.env.REACT_APP_IP}:4000/channels/mychannel/chaincodes/electricledger/invokeuserdata`,

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
      uid: " ",
      cnic: " ",
    });
  }, []);

  useEffect(() => {
    if (apiResponse.success) {
      setShowSuccessAlert(true);
      console.log("apiResponse", apiResponse);
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
            <p>{apiResponse.message}</p>
          </Alert>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="uid">User ID</label>
        <input
          type="text"
          placeholder="Enter uid here"
          onChange={handleChange}
          name="uid"
          value={formData.uid}
        />
        <br />
        <br />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="New User Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
        />
        <br />
        <br />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          placeholder="Address"
          onChange={handleChange}
          name="address"
          value={formData.address}
        />
        <br />
        <br />
        <label htmlFor="cnic">Cnic</label>
        <input
          type="text"
          placeholder="cnic"
          onChange={handleChange}
          name="cnic"
          value={formData.cnic}
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
        <label htmlFor="fcn">which method you want to use ?</label>
        <br />
        <select
          id="fcn"
          value={formData.fcn}
          onChange={handleChange}
          name="fcn"
        >
          <option value="none">--Select--</option>
          <option value="writeData">writeData</option>
        </select>
        <br />
        <label htmlFor="chaincodeName">Select ChainCode name ?</label>
        <br />
        <select
          id="chaincodeName"
          value={formData.chaincodeName}
          onChange={handleChange}
          name="chaincodeName"
        >
          <option value="none">--Select--</option>
          <option value="electricledger">Electricledger</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
