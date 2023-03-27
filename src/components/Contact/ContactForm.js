import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <div className="form">
      {/* <form action="">
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
      </form> */}

      {/* Commented for future use */}

      <div className="contact-info">
        <p> To discuss more reach me <span style={{color: 'rgb(248, 217, 15)'}}>@</span> <span> <a href="mailto:sachusaran29.94@gmail.com">Sachusaran29.94@gamil.com</a></span></p>
      </div>

    </div>
  );
};

export default ContactForm;
