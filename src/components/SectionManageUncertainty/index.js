import React from 'react';
import './styles.scss';

// images
import canoeCouple from './media/canoecouple.svg';

const SectionManageUncertainty = () => {
  return (
    <div className="pt-6 pb-6">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="slab">A way to manage uncertainty</h1>
            <p className="circular">
              Plans change over time—your insurance products can too. Redefine
              your insurance products as life happens.
            </p>
          </div>
          <div className="col-md-4">
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
