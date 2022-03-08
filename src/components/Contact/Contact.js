import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div className="header">
        <h1 className="center">Contact</h1>
        <h2 className="center hover-color">Reach to me from here!</h2>
      </div>
      <div className="contact-form">
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message Here..."
            name="message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
