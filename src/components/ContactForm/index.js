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
    // set the state for the variables
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      show: false,
    };
  }

  // loop each entry and get the value
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // add data to the database
  addData = (e, slackPost) => {
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

    // handle the collaps
    document.querySelector('.alert').style.display = 'block';

    // TODO is there a better solution for the alert message?

    this.setState({ show: true });

    const setShowFalse = () => {
      this.setState({ show: false });
    };

    setTimeout(function() {
      setShowFalse();
    }, 10000);

    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 10500);

    // setAlertNone();

    slackPost = () => {
      var Slack = require('slack-node');

      var webhookUri =
        'https://hooks.slack.com/services/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';

      var slack = new Slack();
      slack.setWebhook(webhookUri);

      slack.webhook(
        {
          channel: '#contact-form',
          username: 'WebHook-bot',
          text:
            '_New contact submission: _\n' +
            '*Name*: ' +
            this.state.name +
            '\n' +
            '*Email*: ' +
            this.state.email +
            '\n' +
            '*Phone*: ' +
            this.state.phone +
            '\n' +
            '*Message*: ' +
            this.state.message,
        },
        function(err, response) {
          console.log(response);
        }
      );
    };

    slackPost();
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
      <div className="text-left nxt_body-xsmall">
        <form onSubmit={this.addData}>
          <Fade top when={this.state.show}>
            <div className="alert nxt_body-small">
              <p>We received your message! We’ll get back to you shortly.</p>
              <p>
                If this is an urgent matter, pleae call us at (833) 646-6398
              </p>
            </div>
          </Fade>
          <div>
            <label>Name</label>
            <input
              className="form-control mb-3"
              type="text"
              name="name"
              onChange={this.updateInput}
              value={this.state.name}
              required
              // // TODO create custome validation
              // oninvalid="this.setCustomValidity('Enter User Name Here')"
              // oninput="this.setCustomValidity('')"

              //validation examples https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Constraint_API%27s_element.setCustomValidity()
              // validation example https://stackoverflow.com/questions/19122886/how-can-i-create-a-custom-message-when-an-html5-required-input-pattern-does-not
              // npm for validation https://www.npmjs.com/package/react-validate-form
            />
            <div class="invalid-feedback">Invalid Name</div>
          </div>
          <div>
            <label>Email</label>
            <input
              className="form-control mb-3"
              type="email"
              name="email"
              onChange={this.updateInput}
              value={this.state.email}
              // this pattern makes sure that the user enters a email that contains @ and . in the input
              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}"
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
              maxLength="14"
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
      </div>
    );
  }
}

export default ContactForm;
