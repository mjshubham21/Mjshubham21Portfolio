import React from "react";

function Portfolio() {
  return (
    <section id="projects">
      <div className="projectTitle"> My Projects.</div>
      <section className="page-contain">
        <a href="#projects" className="data-card">
          <h3>01</h3>
          <h4>Portfolio Site.</h4>
          <p>My personal site using ReactJs.</p>
          <a
            href="https://github.com/mjshubham21/Mjshubham21Portfolio"
            target="_blank"
          >
            <button className="gitbtn">GitHub</button>{" "}
          </a>
        </a>
      </section>
    </section>
  );
}

export default Portfolio;
