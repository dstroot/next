import React from 'react';
import './styles.scss';

// images
import bg from './media/mainbg1animationB.svg';
import moped from './media/moped.svg';
import arrow from './media/arrowdown.svg';

// styles
const background = {
  /* Image  */
  backgroundImage: `url(${bg})`,

  /* Set height relative to width */
  height: '60vw',
  minHeight: '425px',

  /* Position the image to scale nicely on all screens */
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',

  borderBottom: '3px solid #DDE1E7',
};

// place the text on the hero image - center text, viewport wide, at the bottom
const divText = {
  textAlign: 'center',
  position: 'absolute',
  top: '8vw',
  width: '100vw',
};

const textSmall = {
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: `calc(10px + 1vw + 0.5vmin)`,
  width: '70vw',
};

const mopedStyle = {
  width: '20vw',
  position: 'absolute',
  bottom: '0',
  left: '10%',
};

// our component
const Section = () => {
  return (
    // https://www.meetnext.com/s/sfsites/c/resource/mainbg1animationB
    <div style={background}>
      <div style={divText}>
        <h1 className="slab text-center">
          What’s your <span className="text-primary">next</span> adventure?
        </h1>
        <div style={textSmall}>
          Insurance products to complement your life goals and passions. We help
          you go after whatever's next for you.
        </div>
        <a
          href="https://www.meetnext.com/s/#bestlife"
          className="text-decoration-none"
        >
          <p className="mt-4 mb-0 text-uppercase text-primary">Learn More</p>
          <img className="d-block-inline" width={45} src={arrow} alt="Arrow" />
        </a>
      </div>
      <img style={mopedStyle} src={moped} alt="Moped" />
    </div>
  );
};

export default Section;
