import React from "react";

function Footer() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <a class="link-1" href="#">
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
