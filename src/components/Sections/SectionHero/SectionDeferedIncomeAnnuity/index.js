import React from 'react';

//component
import SectionHero from '../../SectionHero';

//image
import mainbgforestlake3 from '../../SectionHero/SectionDeferedIncomeAnnuity/media/mainbgforestlake3.svg';
import mountainbike from '../../SectionHero/SectionDeferedIncomeAnnuity/media/mountainbike.svg';
import arrow from './media/arrowdown.svg';

const background = {
  /* Image  */
  backgroundImage: `url(${mainbgforestlake3})`,
};

const SectiionDeferedIncomeAnnuity = () => {
  return (
    <SectionHero
      backgroundImage={background}
      heading="Next Deferred Income Annuity"
      content="A predictable and reliable paycheck for life."
      heroImage={mountainbike}
      linkElement={
        <a href="#bestlife" className="text-decoration-none mt-4">
          <p className="mt-4 mb-2 text-uppercase text-primary">Learn More</p>
          <img className="d-block-inline" width={45} src={arrow} alt="Arrow" />
        </a>
      }
      heroImageAlt="Mountain Bike"
    />
  );
};

export default SectiionDeferedIncomeAnnuity;
