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
        <form action="" netlify>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
