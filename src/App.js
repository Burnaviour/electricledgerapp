import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { BrowserRouter as Router } from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
// import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import QueryBill from "./components/QueryBill";
import NotFoundPage from "./components/NotFoundPage";
import Dashboard from "./components/Dashboard";
import SetPrices from "./components/SetPrices.js";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/HeroSection";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Navbar />}>
    
          {/* <Route path= '/' element = {<Sidebar />}/> */}
          <Route path="/home"   element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/admin-Login" element={<Login />} />
          <Route path="/query-bill" element={<QueryBill />} />
          <Route path="/set-prices" element={<SetPrices />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
