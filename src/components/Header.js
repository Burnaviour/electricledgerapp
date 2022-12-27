import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/AdminLogin">Organization Login</Link>
      </header>
      <Outlet />
    </>
  );
}
