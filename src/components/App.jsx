import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Skills from "./Skills";
import Footer from "./Footer";
import About from "./About";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<NavBar />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<Intro />}></Route>
          <Route exact path="/" element={<Portfolio />}></Route>
          <Route exact path="/" element={<Skills />}></Route>
          <Route exact path="/" element={<Contact />}></Route>
          <Route exact path="/" element={<Footer />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
