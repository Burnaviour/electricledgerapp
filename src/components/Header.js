import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <nav className="nav--design">
        
        <h3 className = "logo--fonts">ELectric Ledger</h3>
        
        
        <div className="set--left">
        <Link className="header-link hover-underline-animation"  to="/">
          Home
        </Link>

        <Link className="header-link  hover-underline-animation" to="/about-us">
          About us
        </Link>

        <Link className="header-link hover-underline-animation" to="/contact-us">
          Contact
        </Link>
        <Link className="header-link hover-underline-animation" to="/login">
          Login
        </Link>
        <Link className="header-link hover-underline-animation" to="/register">
          Register
        </Link>
        <Link className="header-link header-link  hover-underline-animation" to="/admin-Login">
          Organization Login
        </Link>
        </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
