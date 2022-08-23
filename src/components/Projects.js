import React from "react";
import Container from "react-bootstrap/Container";
import weatherProject from "../imgs/weather-dashboard.png";
import wellnessProject from "../imgs/wellness-project.png";
import quizProject from "../imgs/quiz-project.png";
import recipeProject from "../imgs/recipefinder-project.png";
export default function Projects() {
  return (
    <div>
      <Container>
        <section className="project-section" id="projects">
          <h2 className="section-title">projects</h2>
          <div className="line-under"></div>
          <div id="projects-container flex" className="row">
            <img
              src={wellnessProject}
              alt="wellness front-end"
              id="project-custom"
            />
            <img
              src={weatherProject}
              alt="weather dashboard"
              id="banprojectner-custom"
            />
            <img
              src={quizProject}
              alt="coding quiz project"
              id="project-custom"
            />
            <img src={recipeProject} alt="recipe finder" id="banner-custom" />
          </div>
        </section>
      </Container>
    </div>
  );
}
