import React from "react";
import logo from "../imgs/cat-logo.png";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <div>
      <Container>
        <section id="about">
          <h2 className="section-title">about</h2>
          <div className="line-under"></div>
          {/* <img src={logo} alt="banner" className="logo-custom" /> */}
          <p id="about-text">
            Hey! I'm a natural problem-solver who is passionate about enhancing
            people's lives and helping others in any possible way. My background
            is in Psychology, and I did my undergrad at George Mason University
            where I specialized in Work and Organizational Psychology. I
            understand and value the significance of diversity, inclusion, and
            collaboration in teams. I'm also a huge advocate for mental health
            and the concept that health encompasses so much more than just our
            physical health.
          </p>
          <p id="about-text">
            I've always been into creating my own things, my own projects, and
            that is how I found coding. About two years ago, I discovered a cool
            and user-friendly coding app and I could NOT stop using it; little
            by little what initially was a hobby became something I was really
            interested in understanding. I recently graduated from Georgia Tech
            where I completed their intense, immersive Full Stack Software
            Enigineer Bootcamp.
          </p>
        </section>
      </Container>
    </div>
  );
}
