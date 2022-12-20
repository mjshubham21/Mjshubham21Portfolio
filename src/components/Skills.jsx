import React from "react";

function Skills(props) {
  return (
    <>
      <section className="skills">
        <div className="card">
          <div className="content">
            <img src={props.icon} alt="Icon" />
            <p>{props.iconName}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
