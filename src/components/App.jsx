import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from "./Skills";
import skills from "./Skill";
import Footer from "./Footer";

function addSkill(skill) {
  return (
    <Skills
      key={skill.id}
      id={skill.id}
      icon={skill.icon}
      iconName={skill.iconName}
    />
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Portfolio />
      {skills.map(addSkill)}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
