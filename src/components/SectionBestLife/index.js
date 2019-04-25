import React from 'react';

// reveal
import Fade from 'react-reveal/Fade';

// images
import yoga from './media/yogalady.svg';

// our component
const SectionBestLife = () => {
  return (
    <div id="bestlife" className="bg-light py-6">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-5">
            <img className="img-fluid p-5" src={yoga} alt="Yoga Lady" />
          </div>
          <div className="col-md-7">
            <div className="mt-5">
            <Fade bottom>
              <h1 className="nxt_heading-xlarge">Keep living your best life</h1>
                <p className="mt-4">
                  Everyone deserves a chance to do what they love. Next by
                  Pacific Life helps you reach financial goals while you go
                  after your personal ones...
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBestLife;
