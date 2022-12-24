import React from "react";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="footer-right">
          <a href="#"></a>
          <a href="#">
            <img
              className="skillIcon"
              src="./src/assets/linkedin2.png"
              alt=""
            />
          </a>
          <a href="#">
            <img className="skillIcon" src="./src/assets/github2.png" alt="" />
          </a>
          <a href="#">
            <img
              className="skillIcon"
              src="./src/assets/instagram.png"
              alt=""
            />
          </a>
          <a href="#">
            <img className="skillIcon" src="./src/assets/twitter.png" alt="" />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1" href="#">
              Home
            </a>

            <a href="#">About</a>

            <a href="#">Contact</a>
          </p>
          <p>
            @mjshubham21 Copyright &copy; {new Date().getFullYear()} All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
