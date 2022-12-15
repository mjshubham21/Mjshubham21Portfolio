import { useState } from "react";
import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "./Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Intro />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
