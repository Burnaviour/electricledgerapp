import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link className="header-link" to="/">
          Home
        </Link>

        <Link className="header-link" to="/AboutUs">
          About us
        </Link>

        <Link className="header-link" to="/contact-us">
          Contact
        </Link>
        <Link className="header-link" to="/register">
          Register
        </Link>
        <Link className="header-link" to="/AdminLogin">
          Organization Login
        </Link>
      </header>
      <Outlet />
    </>
  );
}
