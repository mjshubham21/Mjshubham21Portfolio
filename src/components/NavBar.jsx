import React, { useState } from "react";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (isOpen) {
      toggleNavbar();
    }
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
              {/* <NavLink to="/">Home</NavLink> */}
              <Link
                to="intro"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li>
              {/* <NavLink to="/projects">Projects</NavLink> */}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li>
              {/* <NavLink to="/contact">Contact Me</NavLink> */}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
            <li>
              {/* <NavLink to="/about">About Me</NavLink> */}
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleClick}
              >
                About Me
              </Link>
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
