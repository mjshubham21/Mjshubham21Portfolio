import React, { useState } from "react";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className={`mobile-nav ${isOpen ? "responsive_nav" : ""}`}>
        <div className="itemL">
          <NavLink to="/">mjshubham21</NavLink>
        </div>
        <div className="itemR">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Me</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <button className="nav-btn" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </>
  );
}

export default NavBar;
