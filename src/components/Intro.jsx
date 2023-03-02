import React from "react";
import hero from "/assets/hero.gif";
function Intro() {
  return (
    <>
      <main>
        <section data-aos="fade-right" id="intro" className="hero">
          <div className="heroText">
            <p className="topData">Hey, I'm</p>
            <h1 className="title">Shubham Pawar</h1>
            <p className="heroData">I'm a MERN stack Developer.</p>
            <a
              className="btn resume"
              href="./assets/shubham_pawar_resume.pdf"
              target="_blank"
            >
              <span className="View">View</span> Resume{" "}
            </a>
          </div>
          <div className="heroImg">
            <img className="heroGif" src={hero} alt="hero img" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Intro;
