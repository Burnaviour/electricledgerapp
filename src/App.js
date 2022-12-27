import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Outlet />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
