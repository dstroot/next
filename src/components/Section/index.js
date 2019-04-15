import React from 'react';
import './styles.scss';

const divHero = {
  /* Image with a color wash */
  backgroundImage: `url(https://www.meetnext.com/s/sfsites/c/resource/mainbg1animationB)`,

  /* Set height relative to width */
  height: '80vw',
  // minHeight: '325px',

  /* Position and center the image to scale nicely on all screens */
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
};

const Section = () => {
  return (
    // https://www.meetnext.com/s/sfsites/c/resource/mainbg1animationB
    <div style={divHero}>
      <h1 className="mt-5 slab text-center">
        What’s your <span className="text-primary">next</span> adventure?
      </h1>
      <h4 className="mr-5 ml-5 text-center">
        Insurance products to complement your life goals and passions. We help
        you go after whatever's next for you.
      </h4>
    </div>
  );
};

export default Section;
