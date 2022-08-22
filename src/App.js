import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import "./App.css"; //styling for overall page

function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
