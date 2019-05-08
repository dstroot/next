import React from 'react';

//components
import SectionTwoColumns from '..';

// images
import ladylaptop1 from '../../SectionTwoColumns/SectionSafetyNet/media/ladylaptop1.svg';
import GirlandDog from '../../SectionTwoColumns/SectionSafetyNet/media/GirlandDog.svg';

// our component
const SectionSafetyNet = () => {
  return (
    <div className="pd-1">
      <SectionTwoColumns
        styleBackground="bg-light"
        styleLeft="order-2"
        styleRight="order-1"
        heading="A safety net for later"
        contentRight="Create an income goal for the future along with a plan that fits
      your priorities and budget. At a future date, Next Deferred Income
      Annuity provides an income stream that you can't outlive."
        contentLeft={
          <img
            className="img-fluid p-5"
            src={ladylaptop1}
            alt="Lady on the Laptop"
          />
        }
      />
      <SectionTwoColumns
        styleBackground="bg-light"
        contentLeft={
          <img className="img-fluid p-5" src={GirlandDog} alt="Girla and Dog" />
        }
        heading="Plays nice with other retirement products"
        contentRight="Already have a 401(k) or IRA? Great! Next Deferred Income Annuity enhances your future financial picture by providing a portion of your retirement income you can count on to last your whole life."
      />
    </div>
  );
};

export default SectionSafetyNet;

// fix the space between the two sections
