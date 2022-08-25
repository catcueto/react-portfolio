import React from "react";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <div>
      <Container>
        <section id="skills">
          <h2 className="section-title">skills</h2>
          <div className="line-under"></div>
          <div className="skills">
            <button id="btn-html" className="skill-specific">
              HTML
            </button>
            <button id="btn-css" className="skill-specific">
              CSS
            </button>
            <button id="btn-bootstrap" className="skill-specific">
              Bootstrap
            </button>
            <button id="btn-js" className="skill-specific">
              JavaScript
            </button>
            <button id="btn-react" className="skill-specific">
              React
            </button>
            <button id="btn-python" className="skill-specific">
              Python
            </button>
            <button id="btn-r" className="skill-specific">
              R
            </button>
            <button id="btn-node" className="skill-specific">
              Node.js
            </button>
            <button id="btn-express" className="skill-specific">
              Express.js
            </button>
            <button id="btn-jquery" className="skill-specific">
              jQuery
            </button>
            <button id="btn-mysql" className="skill-specific">
              MySQL
            </button>
            <button id="btn-mongodb" className="skill-specific">
              MongoDB
            </button>
            <button id="btn-graphql" className="skill-specific">
              GraphQL
            </button>
            <button id="btn-github" className="skill-specific">
              GitHub
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}
