import React from 'react';
// component
import SectionHero from '../../SectionHero';
import Clock from '../SectionBornInCalifornia/media/Clock';

// image

import bg from './media/Office.svg';

// styles
const background = {
  /* Image  */
  backgroundImage: `url(${bg})`,
};

const SectionBornInCalifornia = () => {
  return (
    <>
      <Clock />
      <SectionHero
        backgroundImage={background}
        heading={<h1 className="nxt_heading-xlarge">Born in California</h1>}
        content="Insurance products to complement your life goals and passions. We help you go after whatever's next for you."
      />
    </>
  );
};

export default SectionBornInCalifornia;
