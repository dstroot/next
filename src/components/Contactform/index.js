import React from 'react';
import fire from './fire';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  // What does this actually does?
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addData = e => {
    e.preventDefault();
    const db = fire.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    db.collection('contactForm').add({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    });
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  render() {
    return (
      <div className="mb-6 text-left nxt_body-xsmall">
        <form onSubmit={this.addData}>
          <div>
            <label>Name</label>
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              onChange={this.updateInput}
              value={this.state.name}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="form-control mb-3"
              type="text"
              name="email"
              onChange={this.updateInput}
              value={this.state.email}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              className="form-control mb-3"
              type="text"
              name="phone"
              onChange={this.updateInput}
              value={this.state.phone}
            />
          </div>
          <div>
            <label>Message</label>
            <input
              className="form-control mb-3"
              type="textarea"
              name="message"
              onChange={this.updateInput}
              value={this.state.message}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
