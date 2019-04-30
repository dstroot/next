import React from 'react';

// component
import SectionTwoColumns from '..';

//reveal
import Fade from 'react-reveal/Fade';

// images
import canoeCouple from './media/canoecouple.svg';

// our component
const SectionManageUncertainty = () => {
  return (
    <div id="bestlife">
      <SectionTwoColumns
        styleLeft="order-2"
        styleRight="order-1"
        contentLeft={
          <img className="img-fluid p-5" src={canoeCouple} alt="Canoe Couple" />
        }
        heading="A way to manage uncertainty"
        contentRight="Plans change over time—your insurance products can too. Redefine your insurance products as life happens."
      />
    </div>
  );
};

export default SectionManageUncertainty;
