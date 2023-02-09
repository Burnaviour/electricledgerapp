import "./App.css";
// import { BahotTight } from "./Login/LoginElements.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import PuserDashboard from "./pages/PuserDashboard";
import BillGenrate from "./pages/GenrateBill";
import UserBill from "./pages/userBillData";
import OrganisationDashboard from "./pages/AdminDashboard";
import Setprices from "./pages/setPrice";
import UserHistoryData from "./pages/userHistoryData";
import Adduser from "./pages/adduserData";
import UserUpdate from "./pages/updateuserData";
import RegisterPage from "./pages/Register";
import AdminLogin from "./pages/AdminLogin";
import AdminVerify from "./pages/verifyAdmin";
import UserBillQuery from "./pages/queryBill";

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
        <Route path="/set-prices" element={<Setprices />} exact />
        <Route
          path="/admin-dashboard"
          element={<OrganisationDashboard />}
          exact
        />
        <Route path="/set-prices" element={<Setprices />} exact />
        <Route path="/add-user" element={<Adduser />} exact />
        <Route path="/update-user-data" element={<UserUpdate />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route
          path="/admin-register"
          element={<AdminLogin type="register" />}
          exact
        />
        <Route
          path="/admin-Login"
          element={<AdminLogin type="login" />}
          exact
        />
        <Route path="/verify-user" element={<AdminVerify />} exact />
        <Route path="/query-bill" element={<UserBillQuery />} exact />
      </Routes>
    </Router>
    // </BahotTight>
  );
}

export default App;
