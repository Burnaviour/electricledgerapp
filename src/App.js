import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/AdminLogin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
