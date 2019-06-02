import React from 'react';
import FirebaseConfig from '../FirebaseKey';
import SubmitButton from '../Buttons/SubmitButton';

class ContactForm extends React.Component {
  constructor() {
    super();
    // set the state for the variables
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }

  // loop each entry and get the value
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  // add data to the database
  addData = e => {
    // prevent default event that submits to the page
    e.preventDefault();
    const db = FirebaseConfig.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    // set the state to the data values
    db.collection('ContactForm').add({
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    });
    // reset the state
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
          <SubmitButton buttonText="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
