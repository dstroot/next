import React from 'react';

// component
import SectionTwoColumns from '..';

// reveal
import Fade from 'react-reveal/Fade';

// images
import yoga from './media/yogalady.svg';

// our component
const SectionBestLife = () => {
  return (
    <div id="bestlife">
      <SectionTwoColumns
        styleBackground="bg-light"
        contentLeft={
          <img className="img-fluid p-5" src={yoga} alt="Yoga Lady" />
        }
        heading="Keep living your best life"
        contentRight="Everyone deserves a chance to do what they love. Next by Pacific Life helps you reach financial goals while you go after your personal ones..."
      />
    </div>
  );
};

export default SectionBestLife;
