import React from "react";
import "../styles.css";

function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">mjshubham21</a>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
