import React from 'react';
import './styles.scss';

// images
import yoga from './media/yogalady.svg';

// our component
const SectionBestLife = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row my-5 py-5">
          <div className="col-md-5">
            <img className="img-fluid p-5" src={yoga} alt="Yoga Lady" />
          </div>
          <div className="col-md-7">
            <div className="mt-5">
              <h1 className="slab">
                Keep living your <span className="text-primary">best</span> life
              </h1>
              <p className="circular mt-4">
                Everyone deserves a chance to do what they love. Next by Pacific
                Life helps you reach financial goals while you go after your
                personal ones...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBestLife;
