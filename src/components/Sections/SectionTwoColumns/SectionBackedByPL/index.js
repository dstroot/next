import React from 'react';

// components
import SectionTwoColumns from '../../SectionTwoColumns';

//images
import ARating from '../../SectionTwoColumns/SectionBackedByPL/media/ARating.svg';
import PLVertBWv2 from '../../SectionTwoColumns/SectionBackedByPL/media/PLVertBWv2.svg';
import Twobillies from '../../SectionTwoColumns/SectionBackedByPL/media/Twobillies.svg';

const SectionBackedByPL = () => {
  return (
    <SectionTwoColumns
      sectionHead="Backed by Pacific Life"
      sectionHeadStyle="text-center"
      styleLeft="text-center"
      contentLeft={
        <div className="mt-5">
          <img src={PLVertBWv2} alt="Pacific Life Logo" />
          <img src={Twobillies} alt="2.3 Billions in Benefits" />
          <p>Combined insurance and annuities in 2017</p>
        </div>
      }
      contentRight={
        <div className="mt-5">
          <p>
            Pacific Life is one of the most dependable and experienced insurers
            in the industry. Backed by 150 years of experience, you can count on
            us to be there so you can go out and pursue your passions.
          </p>
          <img src={ARating} alt="A+ Superior" />
          <p>
            A.M. Best rating for financial strength and claims-paying ability.
            <a href="https://www.pacificlife.com/content/dam/paclife/crp/public/ratings/2018WhattheRatingsMean.pdf">
              What the ratings mean.
            </a>
          </p>
        </div>
      }
    />
  );
};

export default SectionBackedByPL;
