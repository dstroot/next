import React from 'react';
// component
import SectionHero from '../../SectionHero';

// image

import bg from './media/contactladys.svg';

// styles
const background = {
  /* Image  */
  backgroundImage: `url(${bg})`,
};

const SectionHereToHelp = () => {
  return (
    <SectionHero
      backgroundImage={background}
      heading="Here to help whenever you need us!"
      content="Insurance products to complement your life goals and passions. We help you go after whatever's next for you."
    />
  );
};

export default SectionHereToHelp;
