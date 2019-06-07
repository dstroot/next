import React from 'react';

// components
import SectionTwoColumnsMultipleRows from '../../SectionTwoColumnsMultipleRows';

//images
import ARating from '../../SectionTwoColumnsMultipleRows/SectionBackedByPL/media/ARating.svg';
import PLVertBWv2 from '../../SectionTwoColumnsMultipleRows/SectionBackedByPL/media/PLVertBWv2.svg';
import Twobillies from '../../SectionTwoColumnsMultipleRows/SectionBackedByPL/media/Twobillies.svg';

const SectionBackedByPL = () => {
  return (
    <>
      <SectionTwoColumnsMultipleRows
        styleBackground="bg-light"
        styleTextAlign="text-center"
        sectionHead={
          <h1 className="nxt_heading-xlarge">Backed by Pacific Life</h1>
        }
        content={
          <>
            <div className="row">
              <div className="col-md-6">
                <img
                  className="mt-5 nxt_mq-wide-image"
                  src={PLVertBWv2}
                  alt="Pacific Life Logo"
                />
              </div>
              <div className="col-md-6">
                <p className="text-left mt-5 ml-5">
                  Pacific Life is one of the most dependable and experienced
                  insurers in the industry. Backed by 150 years of experience,
                  you can count on us to be there so you can go out and pursue
                  your passions.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6 mt-5">
                <img
                  src={Twobillies}
                  alt="2.3 Billions in Benefits"
                  className="nxt_mq-wide-image"
                />
                <p className="mt-4">Combined insurance and annuities in 2017</p>
              </div>
              <div className="col-md-6 mt-5">
                <img
                  src={ARating}
                  alt="A+ Superior"
                  className="nxt_mq-wide-image"
                />
                <p className="mt-4">
                  A.M. Best rating for financial strength and claims-paying
                  ability.&nbsp;
                  <a
                    href="https://www.pacificlife.com/content/dam/paclife/crp/public/ratings/2018WhattheRatingsMean.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    What the ratings mean.
                  </a>
                </p>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default SectionBackedByPL;
