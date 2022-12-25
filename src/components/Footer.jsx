import React from "react";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="footer-right">
          <a href="#"></a>
          <a href="#">
            <img
              className="footerIcon"
              src="./src/assets/linkedin2.png"
              alt="linkedIn"
            />
          </a> 
          <a href="#">
            <img
              className="footerIcon"
              src="./src/assets/github2.png"
              alt="GitHub"
            />
          </a>
          <a href="#">
            <img
              className="footerIcon"
              src="./src/assets/instagram.png"
              alt="Instagram"
            />
          </a>
          <a href="#">
            <img
              className="footerIcon"
              src="./src/assets/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <a className="link-1" href="#">
              Home
            </a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>
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
