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
          <div id="projects-overall">
            <div className="project-row">
              <div className="projects-img">
                <img
                  src={wellnessProject}
                  alt="wellness front-end"
                  id="project-custom"
                  loading="lazy"
                />
              </div>
              <div className="projects-content">
                <h3 className="project-title">Sunshine Wellness</h3>
                <p className="project-description">
                  Sunshine Wellness is a platform that provides a daily quiz to
                  keep track of your mental health progress, links to helpful
                  information from the Health.Org website, and therapeutic dog
                  photos. The quiz is intended to help users become more mindful
                  and keep track of their mental health and stress levels.
                </p>
                <a
                  className="btn-project btn"
                  href="https://catcueto.github.io/wellness-project/"
                  target="_blank"
                >
                  Take a Peek
                </a>
              </div>
            </div>

            <div className="project-row">
              <div className="projects-img">
                <img
                  src={weatherProject}
                  alt="weather dashboard"
                  id="project-custom"
                  loading="lazy"
                />
              </div>
              <div className="projects-content">
                <h3 className="project-title">Weather Dashboard</h3>
                <p className="project-description">
                  {" "}
                  Users will be provided with the current weather as well as the
                  5-day forecast for the specific city they searched. Weather
                  information includes: temperature, wind speed, humidity, and
                  UV-index. Previous searches are also visible, so that the user
                  can access them again if needed.
                </p>
                <a
                  className="btn-project btn"
                  href="https://catcueto.github.io/weather-dashboard/"
                  target="_blank"
                >
                  Take a Peek
                </a>
              </div>
            </div>
            <div className="project-row">
              <div className="projects-img">
                <img
                  src={quizProject}
                  alt="weather dashboard"
                  id="project-custom"
                  loading="lazy"
                />
              </div>
              <div className="projects-content">
                <h3 className="project-title">Coding Quiz</h3>
                <p className="project-description">
                  This fun and interactive coding quiz has 7 questions and the
                  user has 105s to answer each. Per each question answered
                  incorrectly, the user will be subtracted 15 seconds. The
                  user's final score will be the remaining amount of secs left
                  on the timer. Once time is up, the users can input their
                  initials and save their score.
                </p>
                <a
                  className="btn-project btn"
                  href=" https://catcueto.github.io/code-quiz/"
                  target="_blank"
                >
                  Take a Peek
                </a>
              </div>
            </div>

            <div className="project-row">
              <div className="projects-img">
                <img
                  src={recipeProject}
                  alt="recipe finder"
                  id="project-custom"
                  loading="lazy"
                />
              </div>
              <div className="projects-content">
                <h4 className="project-title">Recipe Finder</h4>
                <p className="project-description">
                  The Recipe Finder application contains a collection of recipes
                  for the categories of breakfast, lunch, and dinner. Users can
                  additionally add their own recipe to the website. A featured
                  recipe is randomized every time the user refreshes the page.
                </p>
                <a
                  className="btn-project btn"
                  href="https://salty-island-34746.herokuapp.com/"
                  target="_blank"
                >
                  Take a Peek
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
