import React from 'react';

// reveal
import Fade from 'react-reveal/Fade';

// images
import GirlandDog from './media/GirlandDog.svg';

// our component
const SectionPlaysNice = () => {
  return (
    <div id="bestlife" className="bg-light pb-6 pt-2">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-5">
            <img
              className="img-fluid p-5"
              src={GirlandDog}
              alt="Girla and Dog"
            />
          </div>
          <div className="col-md-7">
            <div className="mt-5">
              <Fade bottom>
                <h1 className="nxt_heading-xlarge">
                  Plays nice with other retirement products
                </h1>
                <p className="mt-4">
                  Already have a 401(k) or IRA? Great! Next Deferred Income
                  Annuity enhances your future financial picture by providing a
                  portion of your retirement income you can count on to last
                  your whole life.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPlaysNice;
