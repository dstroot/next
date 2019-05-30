import React from 'react';

//components
import Button from '../Buttons/Button';

const Contactform = () => {
  return (
    <div>
      <div className="mb-6 text-left nxt_body-xsmall">
        <form id="contactForm">
          <label>Name</label>
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            id="name"
          />

          <label>Email</label>
          <input
            type="text"
            className="form-control mb-3"
            name="email"
            id="email"
          />

          <label>Phone</label>
          <input
            type="text"
            className="form-control mb-3"
            name="phone"
            id="phone"
          />
          <label>Message</label>
          <textarea
            type="text"
            className="form-control mb-5"
            name="message"
            id="message"
            rows="3"
          />
          <button type="submit">Submit</button>
        </form>{' '}
        {/* type for the addEventListener from Main.js  */}
        {/* <Button buttonText="Submit" path="#" /> */}
      </div>
      {/* The core Firebase JS SDK is always required and must be listed first */}
      <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-app.js" />
      <script src="https://www.gstatic.com/firebasejs/6.0.2/firebase-database.js" />
      <script src="main.js" />
    </div>
  );
};
export default Contactform;
