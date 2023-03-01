import React from "react";
import hero2 from "/assets/hero2.png";

function About() {
  return (
    <>
      <section id="about">
        <h3 className="about-h3">About Me</h3>
        <div className="about">
          <img className="about-img" src={hero2} alt="hero 2" />
          Hey I'm a Web Developer mainly foucused on Front End and polishing
          Backend skills... <br />I am currently pursuing Master's in Computer
          Science at Pune University. I finished leaning basic MERN stack
          development in just 73 days, I've documented my learning jounrey on
          Linkedin, do checkout...
        </div>
      </section>
    </>
  );
}

export default About;
