import React from 'react';
import FirebaseConfig from '../FirebaseKey';
import SubmitButton from '../Buttons/SubmitButton';
import PhoneInput from 'react-phone-number-input/basic-input';
import Fade from 'react-reveal/Fade';
import './styles.scss';
import 'slack-node';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        name: '',
        email: '',
        message: '',
      },
      phone: '',
      show: true,
      errors: {
        name: false,
        email: false,
        message: false,
      },
    };
  }

  // set state for each property as user inputs & validate email
  handleOnChange = e => {
    // destructuring assignment - unpack values from object into distinct variable
    const { name, value } = e.target;

    if (name === 'email') {
      this.setState({
        inputs: {
          //... is a spread operator. Copy existing key-value pairs from existing, to new object
          ...this.state.inputs,
          [name]: value,
        },
        errors: {
          ...this.state.errors,
          email:
            // TODO look into more comprehensive validation?
            (value.includes('@') && value.slice(-4).includes('.com')) ||
            value.slice(-4).includes('.edu')
              ? false
              : true,
        },
      });
    } else {
      this.setState({
        inputs: {
          ...this.state.inputs,
          [name]: value,
        },
        errors: {
          ...this.state.errors,
          [name]: false,
        },
      });
    }
  };

  // show invalid email message when field loses focus
  handleOnBlur = e => {
    if (this.state.errors.email === true) {
      document.querySelector('#invalid-email-message').innerHTML =
        'Please enter a valid email';
      document.querySelector('.alert-fail').style.display = 'block';
    }
  };

  handleSubmit = (e, slackPost) => {
    e.preventDefault();

    let inputFields = document.getElementsByClassName('form-input');
    let invalidEmailMessage = document.querySelector('#invalid-email-message');
    let failMessage = document.querySelector('#fail-message');
    let failMessageBox = document.querySelector('.alert-fail');

    // empty array to house empty field names
    const emptyFieldNames = [];

    // empty object to house input state
    let errors = {};

    // loop through input fields...
    for (var i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value === '') {
        let inputName = inputFields[i].name;
        // add name to new array
        emptyFieldNames.push(inputFields[i].getAttribute('name'));
        // add input name and value of true to new object
        errors[inputName] = true;
        failMessageBox.style.display = 'block';
      }
    }
    this.setState({ errors });

    if (this.state.errors.email === true) {
      invalidEmailMessage.innerHTML = 'Please enter a valid email';
    } else if (emptyFieldNames.length > 0) {
      failMessage.innerHTML =
        'Please complete the following field(s): ' + emptyFieldNames.join(', ');
      invalidEmailMessage.innerHTML = '';
    } else {
      failMessage.innerHTML = '';
      invalidEmailMessage.innerHTML = '';
      failMessageBox.style.display = 'none';

      // handle success message
      document.querySelector('.alert-success').style.display = 'block';

      this.setState({ show: true });

      const setShowFalse = () => {
        this.setState({ show: false });
      };

      setTimeout(function() {
        setShowFalse();
      }, 10000);

      setTimeout(function() {
        document.querySelector('.alert-success').style.display = 'none';
      }, 10500);

      // DB configurations
      const db = FirebaseConfig.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      db.collection('ContactUs').add({
        name: this.state.inputs.name,
        email: this.state.inputs.email,
        phone: this.state.phone,
        message: this.state.inputs.message,
      });

      // slack configuration
      slackPost = () => {
        var Slack = require('slack-node');

        var webhookUri =
          'https://hooks.slack.com/services/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';

        var slack = new Slack();
        slack.setWebhook(webhookUri);

        slack.webhook({
          channel: '#contact-form',
          username: 'WebHook-bot',
          text:
            '_New contact submission: _\n' +
            '*Name*: ' +
            this.state.inputs.name +
            '\n' +
            '*Email*: ' +
            this.state.inputs.email +
            '\n' +
            '*Phone*: ' +
            this.state.phone +
            '\n' +
            '*Message*: ' +
            this.state.inputs.message,
        });
      };

      slackPost();

      // reset state
      this.setState({
        inputs: {
          name: '',
          email: '',
          message: '',
        },
        phone: '',
        show: true,
        errors: {
          name: false,
          email: false,
          message: false,
        },
      });
    }
  };

  render() {
    return (
      <div className="text-left nxt_body-xsmall">
        <form noValidate onSubmit={this.handleSubmit}>
          <Fade top when={this.state.show}>
            <div className="alert-success nxt_body-small">
              <p>We received your message! We’ll get back to you shortly.</p>
              <p>
                If this is an urgent matter, pleae call us at (833) 646-6398
              </p>
            </div>
            <div className="alert-fail nxt_body-small">
              <span className="input-fail" id="fail-message" />
              <span className="input-fail" id="invalid-email-message" />
            </div>
          </Fade>
          <div>
            <label>Name</label>
            <input
              className={
                this.state.errors.name
                  ? 'form-control form-input form-input-fail'
                  : 'form-control form-input'
              }
              type="text"
              name="name"
              onChange={this.handleOnChange}
              value={this.state.inputs.name}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className={
                this.state.errors.email
                  ? 'form-control form-input form-input-fail'
                  : 'form-control form-input'
              }
              type="email"
              name="email"
              onChange={this.handleOnChange}
              onBlur={this.handleOnBlur}
              value={this.state.inputs.email}
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
              maxLength="14"
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              className={
                this.state.errors.message
                  ? 'form-control mb-3 form-input form-input-fail'
                  : 'form-control mb-3 form-input'
              }
              type="text"
              name="message"
              onChange={this.handleOnChange}
              value={this.state.inputs.message}
              required
            />
          </div>
          <SubmitButton buttonText="Submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
