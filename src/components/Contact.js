import React from "react";
import Container from "react-bootstrap/Container";

export default function Contact() {
  return (
    <section className="container flex">
      <h2 className="section-title">contact</h2>
      <div className="line-under"></div>
      <div className="Want to get in touch?"></div>
      <form className="contact-form container">
        <input placeholder="Name" type="text" name="name" required></input>
        <input placeholder="Email" type="email" name="email" required></input>
        <textarea
          placeholder="Enter Your Message"
          type="text"
          name="message"
          required
        ></textarea>
        <div id="message-sent">
          <div>
            Your message was sent successfully. I'll get back to you as soon as
            I can :)!{" "}
          </div>
        </div>
        <input
          className="button"
          type="submit"
          id="submitBtn"
          value="SUBMIT"
        ></input>
      </form>
    </section>
  );
}
