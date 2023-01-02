import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  let navigator = useNavigate();

  function handleClick() {
    navigator("/set-prices");
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h1>Organization ElectricLadger</h1>
      <h2>Set prices</h2>
      <button onClick={handleClick}>Set Prices</button>
    </>
  );
}
