import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
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
