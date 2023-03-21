import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="form">
      <form action="">
        <label>Your Name</label>
        <input type="text" />
        <label>Enter Your Mail</label>
        <input type="text" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="6"
          placeholder="Type your message here..."
        ></textarea>{" "}
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
