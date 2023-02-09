import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
export default function UnitPrice(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: false,
  });

  const [apiResponse, setApiResponse] = useState({});
  const [formData, setFormData] = useState({
    unitsPrice: "",
    tax: "",
    Service: "",
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
        `http://${props.ip}:4000/channels/mychannel/chaincodes/electricledger${props.address}`,
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
    if (apiResponse.success) {
      setShowSuccessAlert(true);
      // console.log(apiResponse);
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
            <p>{apiResponse.result.message}</p>
          </Alert>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <br />
        <label htmlFor="unitsPrice">Unit prices </label> <br /> <br />
        <input
          type="number"
          id="unitsPrice"
          placeholder="unit Price"
          onChange={handleChange}
          name="unitsPrice"
          value={formData.unitsPrice}
          min="1"
          max="100000"
        />
        <br />
        <br />
        <label htmlFor="tax">Enter tax Here </label>
        <br />
        <input
          id="tax"
          type="number"
          placeholder="tax"
          value={formData.tax}
          onChange={handleChange}
          name="tax"
          min="1"
          max="100000"
        />
        <br />
        <br />
        <label htmlFor="Service">Enter services Charges</label>
        <br />
        <input
          id="Service"
          type="number"
          placeholder="Service"
          value={formData.Service}
          onChange={handleChange}
          name="Service"
          min="1"
          max="100000"
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
