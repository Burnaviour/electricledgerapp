import React from "react";
import { Link, Outlet } from "react-router-dom";
import Register from "./Register";
export default function Header() {
  return (
    <>
      <header>
        <Link to={Register}>Home</Link>
      </header>
      <Outlet />
    </>
  );
}
