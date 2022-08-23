import React from "react";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <div>
      <Container>
        <h2 className="section-title">skills</h2>
        <div className="line-under"></div>
        <div className="skills">
          <div id="skill-specific">HTML</div>
          <div id="skill-specific">CSS</div>
          <div id="skill-specific">JavaScript</div>
          <div id="skill-specific">React</div>
          <div id="skill-specific">Python</div>
          <div id="skill-specific">R</div>
          <div id="skill-specific">Node.js</div>
          <div id="skill-specific">Express.js</div>
          <div id="skill-specific">jQuery</div>
          <div id="skill-specific">MySQL</div>
          <div id="skill-specific">MongoDB</div>
          <div id="skill-specific">NoSQL</div>
          <div id="skill-specific">GitHub</div>
        </div>
      </Container>
    </div>
  );
}
