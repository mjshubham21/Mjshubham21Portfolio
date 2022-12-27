import React from "react";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="footer-right">
          <a href="#"></a>
          <a
            title="linkedin"
            href="https://www.linkedin.com/in/mjshubham21"
            target={"_blank"}
          >
            <img
              className="footerIcon"
              src="/assets/linkedin2.png"
              alt="linkedIn"
            />
          </a>
          <a
            title="github"
            href="https://github.com/mjshubham21"
            target={"_blank"}
          >
            <img
              className="footerIcon"
              src="/assets/github2.png"
              alt="GitHub"
            />
          </a>
          {/* <a title="instagram" href="#" target={"_blank"}>
            <img
              className="footerIcon"
              src="/assets/instagram.png"
              alt="Instagram"
            />
          </a> */}
          <a
            title="twitter"
            href="https://twitter.com/mjshubham21"
            target={"_blank"}
          >
            <img
              className="footerIcon"
              src="/assets/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>
        <div className="footer-left">
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
