import React from 'react';

//components
import Button from '../Button';

const Form = () => {
  return (
    <form>
      <div className="text-left nxt_body-xsmall">
        <div className="form-group">
          <label for="Name">Name</label>
          <input type="text" className="form-control" id="InputName" />

          <label className="mt-3" for="Email">
            Email
          </label>
          <input type="email" className="form-control" id="InputEmail" />

          <label className="mt-3" for="Phone">
            Phone
          </label>
          <input type="phone" className="form-control" id="InputPhone" />

          <label className="mt-3" for="Message">
            Message
          </label>
          <textarea
            type="text"
            className="form-control"
            id="InputMessage"
            rows="3"
          />
        </div>
      </div>
    </form>
  );
};
export default Form;
