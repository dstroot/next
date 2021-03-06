import React from 'react';

//components
import SectionTwoColumns from '..';

// annimation
import Fade from 'react-reveal/Fade';

// images
import Windsailing from './media/Windsailing.svg';

const SectionBeginModestly = () => {
  return (
    <SectionTwoColumns
      styleBackground="bg-light"
      contentLeft={
        <img className="img-fluid p-5" src={Windsailing} alt="Windsailing" />
      }
      contentRight={
        <div>
          <Fade bottom>
            <h2 className="mb-4 nxt_heading-small">Begin modestly</h2>
          </Fade>
          <Fade bottom>
            <p className="mb-5">
              Create a future income stream you can count on for the rest of
              your life by saving over time.
            </p>
          </Fade>
          <Fade bottom>
            <h2 className="mb-4 nxt_heading-small">Effortless automation</h2>
          </Fade>
          <Fade bottom>
            <p className="mb-5">
              Connect a bank account and you'll start saving automatically.
              Change or pause your contributions at any time.
            </p>
          </Fade>
          <Fade bottom>
            <h2 className="mb-4 nxt_heading-small">Like clockwork</h2>
          </Fade>
          <Fade bottom>
            <p className="mb-5">
              Once you've reached your income start date, we'll pay you every
              month for the rest of your life. No exceptions.
            </p>
          </Fade>
        </div>
      }
    />
  );
};

export default SectionBeginModestly;
