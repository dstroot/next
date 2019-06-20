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
      inputs: {
        name: '',
        email: '',
        message: '',
      },
      phone: '',
      show: true,
      valid: true,
      errors: {
        name: false,
        email: false,
        message: false,
      },
    };
    // this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  // // validate email
  // validateEmail(email) {
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }

  // handleEmailChange(e) {
  //   const email = e.target.value;
  //   const emailValid = this.validateEmail(email);

  //   this.setState({
  //     inputs: {
  //       email: e.target.value,
  //     },
  //     valid: emailValid,
  //   });

  //   if (this.state.valid === !true) {
  //     document.querySelector('#email').innerHTML = 'email ';
  //   } else if (this.state.valid === true) {
  //     document.querySelector('#email').innerHTML = ' ';
  //   }
  // }

  // set state for each property as user inputs
  updateInput = e => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [e.target.name]: e.target.value,
      },

      errors: {
        ...this.state.errors,
        [e.target.name]: false,
      },
    });
  };

  // add red border if users leaves inut box w/o entering text
  handleOnBlur = e => {
    const { inputs } = this.state;
    if (inputs[e.target.name].length === 0) {
      this.setState({
        errors: {
          ...this.state.errors,
          [e.target.name]: true,
        },
      });
    }
  };

  // validate email
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleSubmit = (e, slackPost) => {
    // prevent default behavior
    e.preventDefault();

    let inputFields = document.getElementsByClassName('form-input');
    const emptyFieldNames = [];

    // loop through input fields for empty values & add name attribute to new empty array
    for (var i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value === '') {
        emptyFieldNames.push(inputFields[i].getAttribute('name'));
      }
    }

    // destructuring. assigning all properties of inputs object as variables
    const { inputs } = this.state;

    let newErrorsObj = Object.entries(inputs)
      .filter(([key, value]) => {
        return value.length === 0;
      })
      .reduce((obj, [key, value]) => {
        if (value.length === 0) {
          obj[key] = true;
        } else {
          obj[key] = false;
        }
        return obj;
      }, {});

    if (emptyFieldNames.length > 0 || Object.keys(newErrorsObj).length > 0) {
      document.querySelector('#fail-message').innerHTML =
        'Please complete the following fields: ' + emptyFieldNames.join(', ');

      this.setState({
        errors: newErrorsObj,
      });
    } else {
      document.querySelector('#fail-message').innerHTML = '';

      const db = FirebaseConfig.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      // set the state to the data values
      db.collection('ContactForm').add({
        name: this.state.inputs.name,
        email: this.state.inputs.email,
        phone: this.state.phone,
        message: this.state.inputs.message,
      });

      // handle the collapse
      document.querySelector('.alert-success').style.display = 'block';

      // set to red when error happens
      // document.querySelector('.input').style.invalid.border-color = 'red';

      // TODO is there a better solution for the alert message?

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

      // reset the state
      this.setState({
        inputs: {
          name: '',
          email: '',
          message: '',
        },
        phone: '',
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
              <span id="email-fail" />
            </div>
          </Fade>
          <div>
            <label>Name</label>
            <input
              className={
                this.state.errors.name
                  ? 'form-control mb-3 form-input form-input-fail'
                  : 'form-control mb-3 form-input'
              }
              type="text"
              name="name"
              onChange={this.updateInput}
              onBlur={this.handleOnBlur}
              value={this.state.inputs.name}
              required
              // // TODO create custome validation
              // oninvalid="this.setCustomValidity('Enter User Name Here')"
              // oninput="this.setCustomValidity('')"

              //validation examples https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation#Constraint_API%27s_element.setCustomValidity()
              // validation example https://stackoverflow.com/questions/19122886/how-can-i-create-a-custom-message-when-an-html5-required-input-pattern-does-not
              // npm for validation https://www.npmjs.com/package/react-validate-form
            />
            {/* <div className="invalid-feedback">Invalid Name</div> */}
          </div>
          <div>
            <label>Email</label>
            <input
              className={
                this.state.errors.email
                  ? 'form-control mb-3 form-input form-input-fail'
                  : 'form-control mb-3 form-input'
              }
              type="email"
              name="email"
              onChange={this.updateInput}
              onBlur={this.handleOnBlur}
              value={this.state.inputs.email}
              // this pattern makes sure that the user enters a email that contains @ and . in the input
              // pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{1,}[.]{1}[a-zA-Z]{2,}"
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
              className={
                this.state.errors.message
                  ? 'form-control mb-3 form-input form-input-fail'
                  : 'form-control mb-3 form-input'
              }
              type="text"
              name="message"
              onChange={this.updateInput}
              onBlur={this.handleOnBlur}
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
