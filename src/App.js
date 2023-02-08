import "./App.css";
import { BahotTight } from "./Login/LoginElements.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import PuserDashboard from "./pages/PuserDashboard";
import BillGenrate from "./pages/GenrateBill";
import UserBill from "./pages/userBillData";

import UserHistoryData from "./pages/userHistoryData";

function App() {
  return (
    // <BahotTight>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SigninPage />} exact />
        <Route path="/user-dashboard" element={<PuserDashboard />} exact />
        <Route path="/generate-bill" element={<BillGenrate />} exact />
        <Route path="/user-query-bill" element={<UserBill />} exact />
        <Route path="/user-query-history" element={<UserHistoryData />} exact />
      </Routes>
    </Router>
    // </BahotTight>
  );
}

export default App;
