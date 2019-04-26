import React from 'react';

// import image
import womanphone from './media/womanphone.svg';

const SectionDesignWithYouInMind = () => {
  return (
    <div className="py-6">
      <div className="container text-center">
        <h1 className="nxt_heading-large">Designed with you in mind</h1>
        <img src={womanphone} alt="Woman with the Phone" />
        <h2>Fearlessly Flexible</h2>
        <p>
          Our products adapt to your life’s biggest moments. Change them when
          your needs do.
        </p>
        <h2>Radically Simple</h2>
        <p>
          Straight forward products and features. Know what you're getting from
          the beginning.
        </p>
        <h2>Brazenly Transparent</h2>
        <p>No hidden fees or charges.</p>
      </div>
    </div>
  );
};
export default SectionDesignWithYouInMind;
