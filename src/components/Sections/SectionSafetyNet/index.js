import React from 'react';

//reveal
import Fade from 'react-reveal/Fade';

// images
import ladylaptop1 from './media/ladylaptop1.svg';

// our component
const SectionSafetyNet = () => {
  return (
    <div className="nxt_bg-gray pt-6 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Fade bottom>
              <h1 className="nxt_heading-xlarge">A safety net for later</h1>
              <p className="mt-4">
                Create an income goal for the future along with a plan that fits
                your priorities and budget. At a future date, Next Deferred
                Income Annuity provides an income stream that you can't outlive.
              </p>
            </Fade>
          </div>
          <div className="col-md-5">
            <div>
              <img
                className="img-fluid"
                src={ladylaptop1}
                alt="Lady on the Laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSafetyNet;
