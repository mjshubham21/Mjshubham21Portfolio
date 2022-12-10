import React from "react";
import "../styles/styles.css";

function NavBar() {
  return (
    <>
      <nav>
        <div className="itemL">
          <a href="#">mjshubham21</a>
        </div>
        <div className="itemR">
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
