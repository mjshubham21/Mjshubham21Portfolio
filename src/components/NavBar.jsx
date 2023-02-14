import React, { useRef } from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <nav ref={navRef}>
        <div className="itemL">
          <Link to="#">mjshubham21</Link>
        </div>
        <div className="itemR">
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#projects">Projects</Link>
            </li>
            <li>
              <Link to="#contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/about" target="_blank">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button className="nav-btn nav-clise-btn" onClick={showNavBar}>
        <FaBars />
      </button>
      <button className="nav-btn" onClick={showNavBar}>
        <FaTimes />
      </button>
    </>
  );
}

export default NavBar;
