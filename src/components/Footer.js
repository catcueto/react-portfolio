import React from "react";
import logo from "../imgs/cat-logo.png";

export default function Contact() {
  return (
    <footer>
      <img src={logo} alt="brand logo" />
      <div className="footer-main">
        <div className="footer-main-top">
          <div className="footer-main-contact">
            <h3 className="social-heading">SOCIAL</h3>
            <div className="social-icons">{/* NEED TO ADD ICONS */}</div>
            <ion-icon name="logo-linkedin" id="icon-custom"></ion-icon>
            <ion-icon name="logo-github" id="icon-custom"></ion-icon>
            <ion-icon name="mail-outline" id="icon-custom"></ion-icon>
          </div>
        </div>
      </div>
    </footer>
  );
}
