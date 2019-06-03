import React from 'react';
import FirebaseConfig from './../../../FirebaseKey';

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
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        onChange={this.updateInput}
                        value={this.state.email}
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
