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

        <Link className="header-link" to="/about-us">
          About us
        </Link>

        <Link className="header-link" to="/contact-us">
          Contact
        </Link>
        <Link className="header-link" to="/login">
          Login
        </Link>
        <Link className="header-link" to="/register">
          Register
        </Link>
        <Link className="header-link" to="/admin-Login">
          Organization Login
        </Link>
      </header>
      <Outlet />
    </>
  );
}
