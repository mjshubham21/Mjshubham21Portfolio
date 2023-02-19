import React, { useRef, useState } from "react";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const showNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav
        className={`mobile-nav ${isOpen ? "responsive_nav" : ""}`}
        ref={navRef}
      >
        <div className="itemL">
          <NavLink to="/" exact activeClassName="active">
            mjshubham21
          </NavLink>
        </div>
        <div className="itemR">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact Me
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <button className="nav-btn nav-close-btn" onClick={showNavBar}>
        <FaTimes />
      </button>
    </>
  );
}

export default NavBar;
