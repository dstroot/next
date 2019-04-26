import React from 'react';

//reveal
import Fade from 'react-reveal/Fade';

// images
import canoeCouple from './media/canoecouple.svg';

// our component
const SectionManageUncertainty = () => {
  return (
    <div className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Fade bottom>
              <h1 className="nxt_heading-xlarge">
                A way to manage uncertainty
              </h1>
              <p className="mt-4">
                Plans change over time—your insurance products can too. Redefine
                your insurance products as life happens.
              </p>
            </Fade>
          </div>
          <div className="col-md-5">
            <div>
              <img
                className="img-fluid"
                src={canoeCouple}
                alt="Couple in a Canoe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionManageUncertainty;
