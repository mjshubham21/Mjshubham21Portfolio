import React from "react";

function Contact() {
  return (
    <>
      <div class="wrapper">
        <form class="form" method="post" action="mailto:mjshubham21@gmail.com">
          <div class="pageTitle title">Contact Me... </div>
          <div class="secondaryTitle title">
            Please fill this form to get in touch.
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
