import React from 'react';
// component
import SectionHero from '../../SectionHero';
import Button from '../../../Buttons/Button';

// image
// import notfound from './media/notfound.svg';
import bg from './media/notfound.svg';

// styles
const background = {
  /* Image  */
  backgroundImage: `url(${bg})`,
};

const SectionNotFound = () => {
  return (
    <>
      <SectionHero
        backgroundImage={background}
        heading={
          <h1 className="nxt_heading-xlarge">
            Sorry, we couldn’t find that page!
          </h1>
        }
        content="It’s ok to get lost sometimes. Let’s get you back on track."
        linkElement={<Button path="/" buttonText="Go to Homepage" />}
      />
    </>
  );
};

export default SectionNotFound;
