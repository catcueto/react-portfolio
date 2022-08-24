import React from "react";
export default function Socials() {
  return (
    <div className="rightSide-socials">
      <div className="individual-social">
        <a
          href="https://www.linkedin.com/in/catalinacueto/"
          className="social-link"
          target="_blank"
          rel="noreferrer"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      </div>
      <div className="individual-social">
        <a
          href="https://github.com/catcueto/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          {" "}
          <ion-icon name="logo-github" id="icon-custom"></ion-icon>
        </a>
      </div>
      <div className="individual-social">
        <a href="mailto: catacueto@gmail.com" className="social-link">
          {" "}
          <ion-icon name="mail-outline" id="icon-custom"></ion-icon>
        </a>
      </div>
    </div>
  );
}
