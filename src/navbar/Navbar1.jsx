import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar1 = () => {
  return (
    <div>
      <nav id={style.nav}>
        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/"
        >
          <li>Home </li>
        </NavLink>

        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/createusers"
        >
          <li>Create User</li>
        </NavLink>

        <NavLink
          className={(e) => {
            return e.isActive ? "red" : "";
          }}
          to="/allusers"
        >
          <li>All Users</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar1;
