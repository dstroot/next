import React from 'react';

//components
import SectionOneColumn from '..';
import Button from '../../../Button';

//animation
import Fade from 'react-reveal/Fade';

const SectionStayInTouch = () => {
  return (
    <SectionOneColumn
      heading="Stay in Touch"
      content={
        <div>
          <p>Enter your email address to receive updates</p>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Email Address"
              id="InputEmail"
            />
          </div>
          <Button path="/" buttonText="Submit" />
        </div>
      }
    />
  );
};

export default SectionStayInTouch;
