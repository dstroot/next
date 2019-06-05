import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// component
import SectionHero from '../../SectionHero';
import Moped from '../SectionWhatsYourNext/media/Moped';

// image
import arrow from './media/arrowdown.svg';
import moped from './media/moped.svg';
import bg from './media/city.svg';

// styles
const background = {
  backgroundImage: `url(${bg})`,
};

const SectionWhatsYourNext = () => {
  return (
    <>
      <Moped />
      <SectionHero
        backgroundImage={background}
        heading={
          <h1 className="nxt_heading-xlarge">
            What’s your <span className="text-primary">next </span>adventure?
          </h1>
        }
        content="Insurance products to complement your life goals and passions. We help you go after whatever's next for you."
        linkElement={
          <AnchorLink href="#bestlife" className="text-decoration-none mt-4">
            <p className="mt-4 mb-2 text-uppercase text-primary">Learn More</p>
            <img
              className="d-block-inline"
              width={45}
              src={arrow}
              alt="Arrow"
            />
          </AnchorLink>
        }
        heroImage={moped}
        heroImageAlt="moped"
      />
    </>
  );
};

export default SectionWhatsYourNext;
