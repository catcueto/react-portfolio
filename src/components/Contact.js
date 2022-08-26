import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill in the missing field");
      return;
    } else {
      setErrorMessage(
        `Thank you, ${name}! I'll get back to you as soon as I can 🌟 `
      );
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title contact-title">contact</h2>
        {/* <div className="line-under-contact"></div> */}
        <div className="subhead-contact">Have questions or want to collab?</div>
        <form className="contact-form">
          <input
            className="inputs"
            value={name}
            name="name"
            placeholder="Name"
            type="text"
            onChange={handleInputChange}
            required
          ></input>
          <input
            className="inputs"
            value={email}
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleInputChange}
            required
          ></input>
          <textarea
            className="inputs message"
            value={message}
            name="message"
            placeholder="Enter Your Message"
            type="text"
            onChange={handleInputChange}
            required
          ></textarea>
          <input type="hidden" name="_captcha" value="false"></input>
          <input
            className="button"
            type="submit"
            id="submitBtn"
            value="SUBMIT"
            onClick={handleFormSubmit}
          ></input>
        </form>
        <br></br>
        {errorMessage && (
          <div>
            <p className="done-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactForm;
