import React from 'react';

//components
import SectionOneColumn from '..';
import Button from '../../../Buttons/Button';

//animation
// import Fade from 'react-reveal/Fade';

const SectionStayInTouch = () => {
  return (
    <SectionOneColumn
      heading="Stay in Touch"
      content={
        <div>
          <p className="mb-4">Enter your email address to receive updates</p>
          <div className="container">
            <div className="row justify-content-md-center mb-4">
              <div className="col-md-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email Address"
                  id="InputEmail"
                />
              </div>
            </div>
          </div>
          <Button path="/" buttonText="Submit" />
        </div>
      }
    />
  );
};

export default SectionStayInTouch;
