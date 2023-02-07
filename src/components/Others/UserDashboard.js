import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function UserDashboard() {
  const navigator = useNavigate();
  function handleClick(e) {
    if (e.target.id === "btn-1") {
      navigator("/query-bill");
    }
    if (e.target.id === "btn-2") {
      navigator("/generate-bill");
    }
  }
  const prices = JSON.parse(localStorage.getItem("prices"));

  return (
    <>
      <h1>User Dashboard</h1>

      <h2>Welcome {localStorage.getItem("username")}</h2>
      <h3>Organization : {localStorage.getItem("orgName")}</h3>
      <h3>prices </h3>
      <h4>Service Chrages {prices.servicesCharges} PKR</h4>
      <h4>Tax {prices.tax} %</h4>
      <h4>Unit Price {prices.unitPrice} PKR</h4>
      <div>
        <Button
          id="btn-1"
          variant="success"
          className="mx-4 my-4"
          type="button"
          onClick={handleClick}
        >
          Query Bill Details
        </Button>

        <Button
          id="btn-2"
          variant="success"
          className="mx-4 my-4"
          type="button"
          onClick={handleClick}
        >
          Generate Bill
        </Button>
      </div>
    </>
  );
}
