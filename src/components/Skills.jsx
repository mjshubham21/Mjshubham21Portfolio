import React from "react";
// import Skill from "./Skill";

function Skills() {
  return (
    <>
      <section className="skills">
        <div className="card">
          <div className="content">
            <img
              className="skillIcon"
              src="./src/assets/html5.svg"
              alt="Icon"
            />
            <p className="skillName">HTML</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="./src/assets/css3.svg" alt="Icon" />
            <p className="skillName">CSS3</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="./src/assets/js.svg" alt="Icon" />
            <p className="skillName">JavaScript</p>
          </div>
          <div className="content">
            <img
              className="skillIcon"
              src="./src/assets/react.svg"
              alt="Icon"
            />
            <p className="skillName">ReactJs</p>
          </div>
          <div className="content">
            <img
              className="skillIcon"
              src="./src/assets/mongodb.svg"
              alt="Icon"
            />
            <p className="skillName">MongoDB</p>
          </div>
          <div className="content">
            <img
              className="skillIcon"
              src="./src/assets/express.svg"
              alt="Icon"
            />
            <p className="skillName">ExpressJs</p>
          </div>
          <div className="content">
            <img
              className="skillIcon"
              src="./src/assets/github.svg"
              alt="Icon"
            />
            <p className="skillName">GitHub</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="./src/assets/node.svg" alt="Icon" />
            <p className="skillName">NodeJs</p>
          </div>
          <div className="content">
            <img
              className="skillIcon"
              src="./src/assets/password.svg"
              alt="Icon"
            />
            <p className="skillName">Authentication</p>
          </div>
          <div className="content">
            <img className="skillIcon" src="./src/assets/api.svg" alt="Icon" />
            <p className="skillName">API</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
