import React from 'react';

//components
// import Button from '../Buttons/Button';

const ContactForm = () => {
  return (
    <div className="mb-6 text-left nxt_body-xsmall">
      <form id="contactForm">
        <div>
          <label>Name</label>
          <input type="text" className="form-control mb-3" id="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" className="form-control mb-3" id="email" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" className="form-control mb-3" id="phone" />
        </div>
        <div>
          <label>Message</label>
          <textarea
            type="text"
            className="form-control mb-5"
            id="message"
            rows="3"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
