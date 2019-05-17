import React from 'react';

//components
import Button from '../Buttons/Button';

const Form = () => {
  return (
    <div>
      <form>
        <div className="text-left nxt_body-xsmall">
          <form className="form-group" id="contactForm">
            <label htmlFor="Name">Name</label>
            <input type="text" className="form-control" id="Name" />
            <label className="mt-3" htmlFor="Email">
              Email
            </label>
            <input type="email" className="form-control" id="Email" />

            <label className="mt-3" htmlFor="Phone">
              Phone
            </label>
            <input type="phone" className="form-control" id="Phone" />

            <label className="mt-3" htmlFor="Message">
              Message
            </label>
            <textarea
              type="text"
              className="form-control"
              id="Message"
              rows="3"
            />
          </form>
          <div className="mt-5">
            <Button path="#" buttonText="Submit" />
          </div>
        </div>
      </form>
      <script scr="main.js" />
    </div>
  );
};
export default Form;
