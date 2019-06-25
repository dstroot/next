import React from 'react';
import FirebaseConfig from './../../../FirebaseKey';
import Fade from 'react-reveal/Fade';

//components
import SectionOneColumn from '..';
import SubmitButton from '../../../Buttons/SubmitButton';

class SectionStayInTouch extends React.Component {
  constructor() {
    super();
    this.state = {
      inputs: {
        email: '',
      },
      errors: {
        email: false,
      },
      show: true,
    };
  }

  handleOnChange = e => {
    // destructuring assignment - unpack values from object into distinct variable
    const { name, value } = e.target;

    // TODO refactor this block since it's just one input field
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

  handleSubmit = e => {
    e.preventDefault();

    let invalidEmailMessage = document.querySelector('#invalid-email-message');
    let failMessage = document.querySelector('#fail-message');
    let failMessageBox = document.querySelector('.alert-fail');
    let successMessage = document.querySelector('.alert-success');

    if (this.state.inputs.email === '') {
      this.setState({
        errors: {
          email: true,
        },
      });
      failMessageBox.style.display = 'block';
      failMessage.innerHTML = 'Please enter your email';
    } else if (this.state.errors.email === true) {
      invalidEmailMessage.innerHTML = 'Please enter a valid email';
      failMessage.innerHTML = '';
      failMessageBox.style.display = 'block';
    } else {
      invalidEmailMessage.innerHTML = '';
      failMessageBox.style.display = 'none';

      // handle success message
      successMessage.style.display = 'block';

      this.setState({ show: true });

      const setShowFalse = () => {
        this.setState({ show: false });
      };

      setTimeout(function() {
        setShowFalse();
      }, 3000);

      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 3500);

      // add to database
      const db = FirebaseConfig.firestore();
      db.settings({
        timestampsInSnapshots: true,
      });
      db.collection('StayInTouch').add({
        email: this.state.inputs.email,
      });

      // reset state
      this.setState({
        inputs: {
          email: '',
        },
        errors: {
          email: false,
        },
      });
    }
  };

  render() {
    return (
      <div id="stayintouch">
        <SectionOneColumn
          heading="Stay in Touch"
          content={
            <div>
              <p className="mb-4">
                Enter your email address to receive updates
              </p>
              <form noValidate onSubmit={this.handleSubmit}>
                <div className="container">
                  <div className="row justify-content-md-center mb-4">
                    <div className="col-md-6">
                      <Fade top when={this.state.show}>
                        <div className="alert-success nxt_body-small mb-3">
                          <span>You are on the list!</span>
                        </div>
                        <div className="alert-fail nxt_body-small mb-3">
                          <span className="input-fail" id="fail-message" />
                          <span
                            className="input-fail"
                            id="invalid-email-message"
                          />
                        </div>
                      </Fade>
                      <input
                        className={
                          this.state.errors.email
                            ? 'form-control form-input form-input-fail'
                            : 'form-control form-input'
                        }
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={this.handleOnChange}
                        value={this.state.inputs.email}
                      />
                    </div>
                  </div>
                </div>
                <SubmitButton buttonText="Submit" type="submit" />
              </form>
            </div>
          }
        />
      </div>
    );
  }
}

export default SectionStayInTouch;
