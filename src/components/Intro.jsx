import React from "react";
import hero from "../assets/hero.gif";
function Intro() {
  return (
    <>
      <main>
        <section id="intro" className="hero">
          <div className="heroText">
            <p className="topData">Hey, I'm</p>
            <h1 className="title">Shubham Pawar</h1>
            <p className="heroData">I'm a MERN stack Dev</p>
            <button className="btn">Contact Me</button>
            <button className="btn">Resume</button>
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
