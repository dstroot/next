import React from 'react';
// component
import SectionHero from '../../SectionHero';

// image

import bg from './media/contactladys.svg';
import twoLights from './media/twolights.svg';

// styles
const background = {
  /* Image  */
  backgroundImage: `url(${bg})`,
};

const lightStyle = {
  width: '42vh',
  minWidth: '50px',
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '12vh',
  left: '0',
  right: '0',
};

const SectionHereToHelp = () => {
  return (
    <>
      <img src={twoLights} style={lightStyle} alt="Two Lights" />
      <SectionHero
        backgroundImage={background}
        heading={
          <h1 className="nxt_heading-xlarge">
            Here to help whenever you need us!
          </h1>
        }
        content="Insurance products to complement your life goals and passions. We help you go after whatever's next for you."
      />
    </>
  );
};

export default SectionHereToHelp;
