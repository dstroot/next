import React from './node_modules/react';

// components
import SectionThreeColumns from '..';

// images
import Arrows from '../SectionHowItWorks/media/Arrows.svg';
import clock from '../SectionHowItWorks/media/clock.svg';
import pottedplant from '../SectionHowItWorks/media/pottedplant.svg';

const SectionHowItWorks = () => {
  return (
    <div className="py-6">
      <SectionThreeColumns
        heading="How it works"
        styleColumnAlign="align-items-center"
        contentLeft={
          <img
            className="mt-5"
            src={pottedplant}
            width={60}
            alt="Potted Plant"
          />
        }
        contentMiddle={
          <img className="mt-5" src={Arrows} width={115} alt="Arrows" />
        }
        contentRight={
          <img className="mt-5" src={clock} width={115} alt="Clock" />
        }
      />
      <SectionThreeColumns
        contentLeft={
          <h2 className="nxt_heading-small px-5">Start small today</h2>
        }
        contentMiddle={
          <h2 className="nxt_heading-small px-4">Flex your contributions</h2>
        }
        contentRight={
          <h2 className="nxt_heading-small px-4">Enjoy lifetime income</h2>
        }
      />
      <SectionThreeColumns
        contentLeft={
          <p className="px-4">
            Open an account for as little as $100. Set your contribution amount
            and we'll automatically debit your checking account every month.
          </p>
        }
        contentMiddle={
          <p className="px-4">
            Adjust or pause your contributions anytime as your financial picture
            changes. Get a bonus at work? Make a one-time contribution anytime.
          </p>
        }
        contentRight={
          <p className="px-4">
            We stop your contributions 13 months before your elected start date.
            Once that day arrives, we'll pay you every month for the rest of
            your life.
          </p>
        }
      />
    </div>
  );
};

export default SectionHowItWorks;
