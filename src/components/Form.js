import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyForm(props) {
  const navigate = useNavigate();
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
          if (response.success) {
            localStorage.setItem("jwt", response.token);
            alert(`Register User in Wallet :${formData.username}`);
            navigate("/login");
          } else {
            console.log(response);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
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
  );
}
