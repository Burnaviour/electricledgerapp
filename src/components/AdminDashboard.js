import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function AdminDashboard() {
  const navigator = useNavigate();
  function handleClick(e) {
    if (e.target.id === "btn-1") {
      navigator("/set-prices");
    }
    if (e.target.id === "btn-2") {
      navigator("/query-bill");
    }
    if (e.target.id === "btn-3") {
      navigator("/add-user");
    }
  }
  return (
    <>
      <h1>Organization ElectricLadger</h1>
      <h1>Dashboard</h1>
      <div>
        <h2>Set prices</h2>
        <Button
          id="btn-1"
          variant="success"
          className="mx-4 my-4"
          type="button"
          onClick={handleClick}
        >
          Set Prices
        </Button>
        <br />
        <h1> Query Bill</h1>
        <Button
          id="btn-2"
          variant="success"
          className="mx-4 my-4"
          type="button"
          onClick={handleClick}
        >
          Query Bill
        </Button>
        <br />
        <h1> Add user Data</h1>
        <Button
          id="btn-3"
          variant="success"
          className="mx-4 my-4"
          type="button"
          onClick={handleClick}
        >
          Add user Data
        </Button>
      </div>
    </>
  );
}
