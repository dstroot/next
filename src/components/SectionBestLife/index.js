import React from 'react';
import './styles.scss';

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
              <h1 className="slab">
                Keep living your <span className="text-primary">best</span> life
              </h1>
              <Fade bottom>
                <p className="circular mt-4">
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
