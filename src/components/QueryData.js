import React from "react";
// import { useNavigate } from "react-router-dom";

export default function QueryData() {
  const [formData, setFormData] = React.useState({
    args: " ",
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
    console.log(formData.args);
  }
  const [apiResponse, setApiResponse] = React.useState({});

  function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log(formData);
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      });
      fetch(
        `http://34.165.211.237:4000/channels/mychannel/chaincodes/electricLadger?args=["${formData.args}"]&peer=peer0.org1.example.com&fcn=queryData`,
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
          // use the data here
          setApiResponse(() => {
            return {
              ...data,
            };
          });
          console.log(apiResponse);
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
