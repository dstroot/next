import React from 'react';

// import image
import womanphone from './media/womanphone.svg';

// reveal
import Fade from 'react-reveal/Fade';

const SectionDesignName = () => {
  return (
    <div className="container text-center py-6">
      <div className="row">
        <div className="col-md-12 pb-5">
          <h1 className="nxt_heading-xlarge">Designed with you in mind</h1>
        </div>
        <div className="col-md-6">
          <img src={womanphone} alt="Woman with the Phone" />
        </div>
        <div className="col-md-6">
          <Fade bottom>
            <h2 className="mb-4 nxt_heading-small">Fearlessly Flexible</h2>
          </Fade>
          <Fade bottom>
            <p className="mb-5">
              Our products adapt to your life’s biggest moments. Change them
              when your needs do.
            </p>
          </Fade>
          <Fade bottom>
            <h2 className="mb-4 nxt_heading-small">Radically Simple</h2>
          </Fade>
          <Fade bottom>
            <p className="mb-5">
              Straight forward products and features. Know what you're getting
              from the beginning.
            </p>
          </Fade>
          <Fade bottom>
            <h2 className="mb-4 nxt_heading-small">Brazenly Transparent</h2>
          </Fade>
          <Fade bottom>
            <p className="mb-5">No hidden fees or charges.</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export default SectionDesignName;
