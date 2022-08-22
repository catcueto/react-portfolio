import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
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
      <Resume />
    </div>
  );
}

export default App;
