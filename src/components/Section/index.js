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
  height: '80vh',
  minHeight: '600px',
  maxHeight: '80vw',

  /* Position the image to scale nicely on all screens */
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  position: 'relative',

  borderBottom: '3px solid #DDE1E7',
};

// place the text on the background image
const divText = {
  textAlign: 'center',
  position: 'absolute',
  top: '10vw',
  width: '100vw',
};

const mopedStyle = {
  width: '20vw',
  minWidth: '175px',
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
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1 className="slab">
                What’s your <span className="text-primary">next</span>{' '}
                adventure?
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <p className="mt-4 circular lead">
                Insurance products to complement your life goals and passions.
                We help you go after whatever's next for you.
              </p>
              <a
                href="https://www.meetnext.com/s/#bestlife"
                className="text-decoration-none mt-4"
              >
                <p className="mt-4 mb-2 text-uppercase text-primary">
                  Learn More
                </p>
                <img
                  className="d-block-inline"
                  width={45}
                  src={arrow}
                  alt="Arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={divText}>
        <h1 className="slab text-center">
          What’s your <span className="text-primary">next</span> adventure?
        </h1>
        <div className="mt-4" style={textSmall}>
          Insurance products to complement your life goals and passions. We help
          you go after whatever's next for you.
        </div>
        <a
          href="https://www.meetnext.com/s/#bestlife"
          className="text-decoration-none mt-4"
        >
          <p className="mt-4 mb-2 text-uppercase text-primary">Learn More</p>
          <img className="d-block-inline" width={45} src={arrow} alt="Arrow" />
        </a>
      </div> */}

      <img style={mopedStyle} src={moped} alt="Moped" />
    </div>
  );
};

export default Section;
