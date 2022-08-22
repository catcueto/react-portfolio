import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
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
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
