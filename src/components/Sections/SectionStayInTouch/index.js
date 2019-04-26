import React from 'react';

//components
import Button from '../../Button';

//animation
import Fade from 'react-reveal/Fade';

const SectionStayInTouch = () => {
  return (
    <div className="py-6">
      <div className="container text-center">
        <h1 className="nxt_heading-large mb-5">Stay in Touch</h1>
        <Fade bottom>
          <p>Enter your email address to receive updates</p>
        </Fade>
        <Button path="/" buttonText="Submit">
          Sup
        </Button>
      </div>
    </div>
  );
};

export default SectionStayInTouch;
