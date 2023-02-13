import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav>
        <div className="itemL">
          <Link to="#">mjshubham21</a>
        </div>
        <div className="itemR">
          <ul>
            <li>
              <Link to="#">Home</a>
            </li>
            <li>
              <Link to="#projects">Projects</a>
            </li>
            <li>
              <Link to="#contact">Contact Me</a>
            </li>
            <li>
              <Link to="/about" target="_blank">
                About Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
