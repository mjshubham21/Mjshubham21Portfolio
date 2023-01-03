import React from "react";
// import Skill from "./Skill";

function Skills() {
  return (
    <>
      <section className="skills">
        <div data-aos="zoom-out-down" className="card">
          <div className="content">
            <img className="skillIcon" src="/assets/html5.svg" alt="Icon" />
            <p className="skillName">HTML</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/css3.svg" alt="Icon" />
            <p className="skillName">CSS3</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/js.svg" alt="Icon" />
            <p className="skillName">JavaScript</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/react.svg" alt="Icon" />
            <p className="skillName">ReactJs</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/mongodb.svg" alt="Icon" />
            <p className="skillName">MongoDB</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/express.svg" alt="Icon" />
            <p className="skillName">ExpressJs</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/github.svg" alt="Icon" />
            <p className="skillName">GitHub</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/node.svg" alt="Icon" />
            <p className="skillName">NodeJs</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/password.svg" alt="Icon" />
            <p className="skillName">Authentication</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="/assets/api.svg" alt="Icon" />
            <p className="skillName">API</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
