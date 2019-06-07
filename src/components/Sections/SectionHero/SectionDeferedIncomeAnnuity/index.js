import React, { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

//component
import SectionHero from '../../SectionHero';
import Mountainbike from '../SectionDeferedIncomeAnnuity/media/Mountainbike';

//image
import mainbgforestlake3 from '../../SectionHero/SectionDeferedIncomeAnnuity/media/mainbgforestlake3.svg';
import mountainbike from '../../SectionHero/SectionDeferedIncomeAnnuity/media/mountainbike.svg';
import arrow from './media/arrowdown.svg';

const background = {
  /* Image  */
  backgroundImage: `url(${mainbgforestlake3})`,
};

const SectiionDeferedIncomeAnnuity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Mountainbike />
      <SectionHero
        backgroundImage={background}
        heading={
          <h1 className="nxt_heading-xlarge">Next Deferred Income Annuity</h1>
        }
        content="A predictable and reliable paycheck for life."
        heroImage={mountainbike}
        linkElement={
          <AnchorLink href="#stayintouch" className="text-decoration-none mt-4">
            <p className="mt-4 mb-2 text-uppercase text-primary">Learn More</p>
            <img
              className="d-block-inline"
              width={45}
              src={arrow}
              alt="Arrow"
            />
          </AnchorLink>
        }
        heroImageAlt="Mountain Bike"
      />
    </>
  );
};

export default SectiionDeferedIncomeAnnuity;
