import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const WalletUpload = (props) => {
  let navigator = useNavigate();
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: false,
  });
  const [showAlert, setShowAlert] = useState(false);
  const [res, setRes] = useState({ success: false, message: "" });

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
        setUploaded(true);
        setRes(res.data);

        dangerAlert();
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
        // setTimeout(() => {
        //   navigator("/admin-dashboard");
        // }, 4000);
      }
    }

    handleSubmitEffect();
    console.log(res);
  }, [res, navigator]);

  return (
    <>
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

      <h1>Verify Your identity</h1>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {error.error && <p>{error.message}</p>}
      {uploaded && <p>File uploaded successfully!</p>}
    </>
  );
};

export default WalletUpload;
