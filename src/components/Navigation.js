import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const handleClick = (e) => {
    const navLinks = document.querySelector(".nav-links");
    const navBar = document.querySelector(".nav-bar");

    navLinks.classList.toggle("show");
    navBar.classList.toggle("show");
  };

  return (
    <header className="nav-header">
      <h2>Kavin Cafe</h2>
      <FaBars className="toggle" onClick={handleClick} />
      <nav className="nav-bar">
        <ul className="nav-links">
          <li>
            <NavLink className="link" to="/add-product/">
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/all-products">
              All Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
