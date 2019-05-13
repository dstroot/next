import React from 'react';

//components
import SectionTwoColumnsMultipleRows from '../../SectionTwoColumnsMultipleRows';

// images
import ladylaptop1 from '../../SectionTwoColumnsMultipleRows/SectionSafetyNet/media/ladylaptop1.svg';
import GirlandDog from '../../SectionTwoColumnsMultipleRows/SectionSafetyNet/media/GirlandDog.svg';

// our component
const SectionSafetyNet = () => {
  return (
    <SectionTwoColumnsMultipleRows
      styleBackground="bg-light"
      styleTextAlign="text-left"
      content={
        <div>
          <div className="row">
            <div className="col-md-6">
              <h1 className="nxt_heading-xlarge">A safety net for later</h1>
              <p>
                Create an income goal for the future along with a plan that fits
                your priorities and budget. At a future date, Next Deferred
                Income Annuity provides an income stream that you can't outlive.
              </p>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid p-5"
                src={ladylaptop1}
                alt="Lady on the Laptop"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 order-2 order-sm-1">
              <img
                className="img-fluid p-5"
                src={GirlandDog}
                alt="Girl and Dog"
              />
            </div>
            <div className="col-md-6 order-1 order-sm-2">
              <h1 className="nxt_heading-xlarge">
                Plays nice with other retirement products
              </h1>
              <p>
                Already have a 401(k) or IRA? Great! Next Deferred Income
                Annuity enhances your future financial picture by providing a
                portion of your retirement income you can count on to last your
                whole life
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SectionSafetyNet;
