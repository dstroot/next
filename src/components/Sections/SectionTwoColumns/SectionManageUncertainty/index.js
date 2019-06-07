import React from 'react';

// component
import SectionTwoColumns from '../../SectionTwoColumns';

//reveal
// import Fade from 'react-reveal/Fade';

// images
import canoeCouple from './media/canoecouple.svg';

// our component
const SectionManageUncertainty = () => {
  return (
    <div>
      <SectionTwoColumns
        styleLeft="order-2"
        styleRight="order-1"
        contentLeft={
          <img className="img-fluid p-5" src={canoeCouple} alt="Canoe Couple" />
        }
        heading={
          <h1 className="nxt_heading-xlarge">A way to manage uncertainty</h1>
        }
        contentRight="Plans change over time—your insurance products can too. Redefine your insurance products as life happens."
      />
    </div>
  );
};

export default SectionManageUncertainty;
