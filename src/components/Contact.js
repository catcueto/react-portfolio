import React from "react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title contact-title">contact</h2>
        {/* <div className="line-under-contact"></div> */}
        <div className="subhead-contact">Have questions or want to collab?</div>
        <form
          className="contact-form"
          action="https://formsubmit.co/3d283826683bb386dfa1cf7ad3fb03b4"
          method="POST"
        >
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
          <input type="hidden" name="_captcha" value="false"></input>
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
