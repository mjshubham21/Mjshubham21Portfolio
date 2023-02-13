import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav>
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
    </>
  );
}

export default NavBar;
