import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import logo from "../../../assets/ripplestreet_logo.png";
import "../../../styles/general.css";
import "./header.css";
// import PropTypes from "prop-types";
import SideNav from "../SideNav/SideNav";
import Logo from "../Logo";

const Header = () => {
  const [sideNav, setSideNav] = useState(false);
  function toggleSideNav() {
    setSideNav(!sideNav);
  }

  function toKebabCase(str) {
    return str.toLowerCase().trim().replace(/[\s]+/g, "-");
  }

  const navElements = [
    "Events",
    "Products",
    "About Us",
    "Contact Us",
    "Sign In",
    "Sign Up",
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <SideNav sideNav={sideNav} toggleSideNav={toggleSideNav} />

        <button onClick={toggleSideNav} className="button-icon">
          <TfiMenu size={32} />
        </button>

        <Logo src={logo} />
      </div>

      <nav className="main-nav">
        <ul className="main-nav-list">
          {navElements.map((ele, index) => (
            <li key={index}>
              <NavLink
                className={({ isActive }) =>
                  isActive && ele !== "Sign Up"
                    ? "main-nav-link active"
                    : "main-nav-link"
                }
                to={toKebabCase(ele)}
              >
                {ele}
              </NavLink>
              {/* Add the href placeholders later */}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
