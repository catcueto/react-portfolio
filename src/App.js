import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Socials from "./components/Socials";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css"; //styling for overall page

function App() {
  return (
    <div>
      <Home />
      <Navigation />
      <Socials />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
