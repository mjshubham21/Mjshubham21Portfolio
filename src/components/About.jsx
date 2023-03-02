import React from "react";
import hero2 from "/assets/hero2.png";

function About() {
  return (
    <>
      <section data-aos="fade-down-right" id="about">
        <h3 className="about-h3">About Me</h3>
        <div className="about">
          <img className="about-img" src={hero2} alt="hero 2" />
          <p>
            {" "}
            Hey I'm a Web Developer mainly foucused on Front End and polishing
            Backend skills... <br />I am currently pursuing Master's in Computer
            Science at Pune University. I finished learning basic MERN stack
            development in just 73 days, I've documented my learning jounrey on
            Linkedin, do checkout... <br />
            I'm constantly learning new features and technologies at a daily
            basis.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
