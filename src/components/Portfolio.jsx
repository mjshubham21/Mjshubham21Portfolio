import React from "react";

function Portfolio() {
  return (
    <>
      <div className="projects"> My Projects.</div>
      <section class="page-contain">
        <a href="#projects" class="data-card">
          <h3>01</h3>
          <h4>Portfolio Site.</h4>
          <p>My personal site using ReactJs.</p>
          <a
            href="https://github.com/mjshubham21/Mjshubham21Portfolio"
            target="_blank"
          >
            <button className="btn">GitHub</button>{" "}
          </a>
        </a>
      </section>
    </>
  );
}

export default Portfolio;
