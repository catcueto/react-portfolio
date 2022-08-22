import React from "react";
import banner from "../imgs/banner-6.jpg";
export default function Home() {
  return (
    <div className="hero-section">
      <img src={banner} alt="banner" id="banner-custom" />
      <div className="hero-content">
        <h1 className="heading-primary">Hola, I'm Catalina Cueto</h1>
        <h4 className="hero-info">
          Software Engineer | Dog Mama | Avid Foodie | Fitness Enthusiast |
          Occasional Chef
        </h4>
      </div>
    </div>
  );
}
