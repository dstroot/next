import React from 'react';

// components
import SectionOneColumn from '..';

// images

import arrows from '../SectionHowItWorks/media/arrows.svg';
import clock from '../SectionHowItWorks/media/clock.svg';
import pottedplant from '../SectionHowItWorks/media/pottedplant.svg';

const SectionHowItWorks = () => {
  return (
    <SectionOneColumn
      heading="How it works"
      content={
        <div className="row">
          <div className="col-md-4 align-bottom">
            <img
              className="mt-5"
              src={pottedplant}
              height={100}
              alt="Potted Plant"
            />
            <h2 className="nxt_heading-small mt-4">
              Start small
              <br /> today
            </h2>
            <p className="mt-4">
              Open an account for as little as $100. Set your contribution
              amount and we'll automatically debit your checking account every
              month.
            </p>
          </div>

          <div className="col-md-4">
            <img className="mt-5" src={arrows} alt="Arrows" height={100} />
            <h2 className="nxt_heading-small mt-4 ">
              Flex your <br /> contributions
            </h2>
            <p className="mt-4">
              Adjust or pause your contributions anytime as your financial
              picture changes. Get a bonus at work? Make a one-time contribution
              anytime.
            </p>
          </div>
          <div className="col-md-4">
            <img className="mt-5" src={clock} alt="Clock" height={100} />
            <h2 className="nxt_heading-small mt-4 ">
              Enjoy lifetime <br /> income
            </h2>
            <p className="mt-4">
              We stop your contributions 13 months before your elected start
              date. Once that day arrives, we'll pay you every month for the
              rest of your life.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default SectionHowItWorks;
