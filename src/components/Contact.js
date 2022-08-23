import React from "react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title contact-title">contact</h2>
        {/* <div className="line-under-contact"></div> */}
        <div className="subhead-contact">Have questions or want to collab?</div>
        <form className="contact-form ">
          <input
            className="inputs"
            placeholder="Name"
            type="text"
            name="name"
            required
          ></input>
          <input
            className="inputs"
            placeholder="Email"
            type="email"
            name="email"
            required
          ></input>
          <textarea
            className="inputs message"
            placeholder="Enter Your Message"
            type="text"
            name="message"
            required
          ></textarea>
          <div id="message-sent">
            <div>
              Your message was sent successfully. I'll get back to you as soon
              as I can :)!{" "}
            </div>
          </div>
          <input
            className="button"
            type="submit"
            id="submitBtn"
            value="SUBMIT"
          ></input>
        </form>
      </div>
    </section>
  );
}
