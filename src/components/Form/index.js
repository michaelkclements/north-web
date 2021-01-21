import React from "react";

export default () => (
  <form
    name="contact_george"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div className="field half first">
      <input labelText="Name" type="text" name="name" id="name" />
    </div>
    <div className="field half">
      <input labelText="Email" type="text" name="email" id="email" />
    </div>
    <div className="field">
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="6" />
    </div>
    <ul className="actions">
      <li>
        <input type="submit" value="Send Message" className="special" />
      </li>
      <li>
        <input type="reset" value="Clear" />
      </li>
    </ul>
  </form>
);
