import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-testing-library';
import fbConfig from './config/fbConfig';

//components
// import Button from '../Buttons/Button';

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  messagesRef = fbConfig.database().ref('formSubmition');

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  saveMessage = event => {
    var newMessageRef = this.messagesRef.push();
    newMessageRef.set({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    });
  };

  render() {
    return (
      <div className="mb-6 text-left nxt_body-xsmall">
        <form onSubmit={this.handleSubmit} id="contactForm">
          <div>
            <label>Name</label>
            <input
              type="text"
              className="form-control mb-3"
              id="name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              className="form-control mb-3"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              className="form-control mb-3"
              id="phone"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              type="text"
              className="form-control mb-5"
              id="message"
              onChange={this.handleChange}
              rows="3"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
