import React from 'react';
import './styles.scss';

// images
import moped from './media/moped.svg';
import arrow from './media/arrowdown.svg';

// styles
const background = {
  /* Image  */
  backgroundImage: `url(https://www.meetnext.com/s/sfsites/c/resource/mainbg1animationB)`,

  /* Set height relative to width */
  height: '60vw',
  minHeight: '425px',

  /* Position the image to scale nicely on all screens */
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',
};

// place the text on the hero image - center text, viewport wide, at the bottom
const divText = {
  textAlign: 'center',
  position: 'absolute',
  bottom: '50%',
  width: '100vw',
};

const mopedStyle = {
  width: '20vw',
  position: 'absolute',
  bottom: '0',
  left: '10%',
};

const Section = () => {
  return (
    // https://www.meetnext.com/s/sfsites/c/resource/mainbg1animationB
    <div style={background}>
      <div style={divText}>
        <h1 className="mt-5 slab text-center">
          What’s your <span className="text-primary">next</span> adventure?
        </h1>
        <h4 className="pl-5 pr-5 mr-5 ml-5 text-center">
          Insurance products to complement your life goals and passions. We help
          you go after whatever's next for you.
        </h4>
        <a
          href="https://www.meetnext.com/s/#bestlife"
          className="text-decoration-none"
        >
          <p className="mt-4 mb-0 text-uppercase text-primary">Learn More</p>
          <img className="d-block-inline" width={45} src={arrow} alt="Arrow" />
        </a>
      </div>
      <img style={mopedStyle} width={200} src={moped} alt="Moped" />
    </div>
  );
};

export default Section;
