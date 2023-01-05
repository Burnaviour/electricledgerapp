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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login user="user" />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/admin-Login" element={<Login user="admin" />} />
          <Route path="/query-bill" element={<QueryBill />} />
          <Route path="/set-prices" element={<SetPrices />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/generate-bill" element={<GenerateBill />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
