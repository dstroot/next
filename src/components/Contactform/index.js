import React from 'react';
import FirebaseConfig from '../FirebaseKey';
import SubmitButton from '../Buttons/SubmitButton';
import PhoneInput from 'react-phone-number-input/basic-input';

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
    document.querySelector('.alert').style.display = 'block';

    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);
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
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="form-control mb-3"
              type="email"
              name="email"
              onChange={this.updateInput}
              value={this.state.email}
              required
            />
          </div>
          <div>
            <label>Phone</label>
            <PhoneInput
              className="form-control mb-3"
              country="US"
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={phone => this.setState({ phone })}
              // locks for phonenumbers without contry code and length of 10 digits ex: (123) 456-7890
              maxlength="14"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              className="form-control mb-3"
              type="text"
              name="message"
              onChange={this.updateInput}
              value={this.state.message}
              required
            />
          </div>
          <SubmitButton buttonText="Submit" type="submit" />
        </form>
        <h4 className="alert">
          We received your message! <br /> We’ll get back to you shortly.
        </h4>
      </div>
    );
  }
}

export default ContactForm;
