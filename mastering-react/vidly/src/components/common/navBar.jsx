import React, { Component } from "react";
import Customers from "../customers";
import { Link, NavLink, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {" "}
      <ul className="nav">
        <li className="nav-item">
          <Link className="navbar-brand" aria-current="page" to="/">
            Vidly
          </Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/rentals">
            Rentals
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
