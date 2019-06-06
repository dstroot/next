import React from 'react';
import FirebaseConfig from './../../../FirebaseKey';
import Fade from 'react-reveal/Fade';

//components
import SectionOneColumn from '..';
import SubmitButton from '../../../Buttons/SubmitButton';

class SectionStayInTouch extends React.Component {
  constructor() {
    super();
    //set the state for the variables
    this.state = {
      email: '',
    };
  }

  //loop each entry and get the value
  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //add the data to the database
  addData = e => {
    e.preventDefault();
    const db = FirebaseConfig.firestore();
    db.settings({
      timestampsInSnapshots: true,
    });
    db.collection('StayInTouch').add({
      email: this.state.email,
    });

    document.querySelector('.alert').style.display = 'block';
    setTimeout(function() {
      document.querySelector('.alert').style.display = 'none';
    }, 5000);

    //reset the state
    this.setState({
      email: '',
    });
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
              <form onSubmit={this.addData}>
                <div className="container">
                  <div className="row justify-content-md-center mb-4">
                    <div className="col-md-6">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={this.updateInput}
                        value={this.state.email}
                        required
                      />
                    </div>
                  </div>
                </div>
                <SubmitButton buttonText="Submit" type="submit" />
              </form>
              <Fade bottom>
                <h4 className="alert col-md-6">You are on the list</h4>
              </Fade>
            </div>
          }
        />
      </div>
    );
  }
}

export default SectionStayInTouch;
