import React, { Component } from "react";
import Customers from "../customers";
import { Route } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Vidly
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Movies
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Customers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Rentals
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
