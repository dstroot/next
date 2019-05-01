import React from 'react';
// component
import SectionHero from '../../SectionHero';

// image

import bg from './media/Office.svg';

// styles
const background = {
  /* Image  */
  backgroundImage: `url(${bg})`,
};

const SectionBornInCalifornia = () => {
  return (
    <SectionHero
      backgroundImage={background}
      heading="Born in California"
      content="Insurance products to complement your life goals and passions. We help you go after whatever's next for you."
    />
  );
};

export default SectionBornInCalifornia;
