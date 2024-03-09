import "./sidenav.css";
import "../../../styles/general.css";
import "../Header/header.css";
import logo from "../../../assets/ripplestreet_logo.png";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

function SideNav({ sideNav, toggleSideNav }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      {sideNav && <div className="overlay"></div>}
      <div className={`nav-menu ${sideNav ? "active" : ""}`}>
        <div className="nav-header">
          <img src={logo} alt="Ripple Street Logo" />
          <button
            className="button-icon"
            style={{ backgroundColor: isHovered ? "#ff9912" : "transparent" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleSideNav}
          >
            <FiArrowLeft size={32} color="white" />
          </button>
        </div>
        <ul className="nav-menu-items">
          <li className="nav-text">
            <a href="#">Home</a>
          </li>
          <li className="nav-text">
            <a href="#">My Events</a>
          </li>
          <li className="nav-text">
            <a href="#">Loyalty Program</a>
          </li>
          <li className="nav-text">
            <a href="#">Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
