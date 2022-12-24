import React from "react";

function Contact() {
  return (
    <>
      <div className="wrapper">
        <form
          className="form"
          method="post"
          action="mailto:mjshubham21@gmail.com"
        >
          <div className="pageTitle title">Contact Me... </div>
          <div className="secondaryTitle title">
            Please fill this form to get in touch.
          </div>
          <input type="text" className="name formEntry" placeholder="Name" />
          <input type="text" className="email formEntry" placeholder="Email" />
          <textarea
            className="message formEntry"
            placeholder="Message"
          ></textarea>
          <button className="submit formEntry">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
