import React from 'react';
import { Link } from '@reach/router';

// components
import SectionOneColumn from '..';
import Button from '../../../Button';

// image
import Blueprint_Logo from '../SectionQuoteToday/media/Blueprint_Logo.svg';

const SectionQuoteToday = () => {
  return (
    <SectionOneColumn
      styleBackground="bg-light"
      heading="Get a quote today"
      content={
        <div>
          <p className="mb-5">
            "Next Deferred Income Annuity is available on the following digital
            platform. Visit their site today to see what your future income
            could be!"
          </p>
          <img className="mb-5" src={Blueprint_Logo} alt="Blueprint Logo" />
          <div className="mb-5">
            <Button
              path="//www.blueprintincome.com/personal-pension"
              buttonText="View Site"
            />
          </div>
          <h2 className="nxt_heading-small">
            Still have questions? <Link to="/contact">Contact us.</Link>
          </h2>
        </div>
      }
    />
  );
};

export default SectionQuoteToday;
