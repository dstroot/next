import React from 'react';

// component
import SectionTwoColumns from '..';

// reveal
import Fade from 'react-reveal/Fade';

// import image
import womanphone from './media/womanphone.svg';

const SectionDesignWithYouInMind = () => {
  return (
    <div>
      <SectionTwoColumns
        sectionHead="Designed with you in mind"
        contentLeft={
          <img
            className="img-fluid p-5"
            src={womanphone}
            alt="Woman with the Phone"
          />
        }
        contentRight={
          <div>
            <h2 className="nxt_heading-small mb-2"> Fearlessly Flexible</h2>
            <p className="mb-5">
              Our products adapt to your life’s biggest moments. Change them
              when your needs do.
            </p>
            <h2 className="nxt_heading-small mb-2">Radically Simple</h2>
            <p className="mb-5">
              Straight forward products and features. Know what you're getting
              from the beginning.
            </p>
            <h2 className="nxt_heading-small mb-2">Brazenly Transparent</h2>
            <p className="mb-5">No hidden fees or charges.</p>
          </div>
        }
      />
    </div>
  );
};

export default SectionDesignWithYouInMind;
