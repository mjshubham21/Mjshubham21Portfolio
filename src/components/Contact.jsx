import React from "react";

function Contact() {
  return (
    <>
      <div class="wrapper">
        <form class="form">
          <div class="pageTitle title">Sign Up </div>
          <div class="secondaryTitle title">
            Please fill this form to sign up.
          </div>
          <input type="text" class="name formEntry" placeholder="Name" />
          <input type="text" class="email formEntry" placeholder="Email" />
          <textarea class="message formEntry" placeholder="Message"></textarea>
          <button class="submit formEntry" onclick="thanks()">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
