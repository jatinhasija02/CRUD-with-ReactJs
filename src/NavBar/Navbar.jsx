import React from "react";
import { NavLink } from "react-router-dom";
import Style from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={Style.navbar}>
        <NavLink to="/">
          <h1>Home</h1>
        </NavLink>
        <NavLink to="/create">
          <h1>Create Data</h1>
        </NavLink>
        <NavLink to="/read">
          <h1>All Data</h1>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
