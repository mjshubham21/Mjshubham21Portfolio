import { useState } from "react";
import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Intro />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
