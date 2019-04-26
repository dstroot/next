import React from 'react';

//components
import Button from '../Button';

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <label for="Name">Name</label>
        <input type="text" className="form-control" id="InputName" />

        <label for="Email">Email</label>
        <input type="email" className="form-control" id="InputName" />

        <label for="Phone">Phone</label>
        <input type="phone" className="form-control" id="InputName" />

        <label for="Message">Message</label>
        <input type="text" className="form-control" id="InputName" />
      </div>
    </form>
  );
};
export default Form;
