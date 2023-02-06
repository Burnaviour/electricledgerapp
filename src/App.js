import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import QueryBill from "./components/QueryBill";
import NotFoundPage from "./components/NotFoundPage";
import AdminDashboard from "./components/AdminDashboard";
import SetPrices from "./components/SetPrices.js";
import UserDashboard from "./components/UserDashboard";
import GenerateBill from "./components/GenerateBill";
import AddUser from "./components/AddUser";
import AdminForm from "./components/AdminRegister";
import WalletUpload from "./components/WalletUpload";
import UpdateUserData from "./components/UpdateUserData";
import UserBillData from "./components/UserBillData";
function App() {
  let ip = process.env.REACT_APP_IP;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin-register"
            element={
              <AdminForm
                ip={ip}
                user="admin"
                type="register"
                address="admin/register"
              />
            }
          />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/login" element={<Login user="user" />} />
          <Route exact path="/contact-us" element={<Contact />} />{" "}
          <Route exact path="/verify-user" element={<WalletUpload ip={ip} />} />
          <Route exact path="/admin-Login" element={<Login user="admin" />} />
          <Route exact path="/query-bill" element={<QueryBill />} />
          <Route exact path="/user-query-bill" element={<UserBillData />} />
          <Route exact path="/set-prices" element={<SetPrices />} />
          <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
          <Route exact path="/user-dashboard" element={<UserDashboard />} />
          <Route exact path="/update-user-data" element={<UpdateUserData />} />
          <Route
            exact
            path="/generate-bill"
            element={<GenerateBill ip={ip} />}
          />
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
