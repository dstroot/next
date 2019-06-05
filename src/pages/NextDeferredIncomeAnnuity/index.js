import React, { useEffect } from 'react';

//components
import SectionDeferedIncomeAnnuity from '../../components/Sections/SectionHero/SectionDeferedIncomeAnnuity';
import SectionSafetyNet from '../../components/Sections/SectionTwoColumnsMultipleRows/SectionSafetyNet';
import SectionStayInTouch from '../../components/Sections/SectionOneColumn/SectionStayInTouch';
import SectionBeginModestly from '../../components/Sections/SectionTwoColumns/SectionBeginModestly';
import SectionHowItWorks from '../../components/Sections/SectionOneColumn/SectionHowItWorks';
import SectionQuoteToday from '../../components/Sections/SectionOneColumn/SectionQuoteToday';
import FooterCustom from '../../components/FooterCustom';

const NextDeferredIncomeAnnuity = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Next Deffered Income Annuity`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionDeferedIncomeAnnuity />
      <SectionSafetyNet />
      <SectionStayInTouch />
      <SectionBeginModestly />
      <SectionHowItWorks />
      <SectionQuoteToday />
      <FooterCustom
        content={
          <div className="nxt_footer">
            <p>
              No bank guarantee • Not a deposit • May lose value • Not FDIC/NCUA
              insured • Not insured by any federal government agency
            </p>
            <p>Pacific Life is unaffiliated with Blueprint Income.</p>
            <p>
              Pacific Life, its affiliates, its distributors, and respective
              representatives do not provide tax, accounting, or legal advice.
              Any taxpayer should seek advice based on the taxpayer's particular
              circumstances from an independent tax advisor or attorney.
            </p>
            <p>
              <i>
                Pacific Life is a product provider. It is not a fiduciary and
                therefore does not give advice or make recommendations regarding
                insurance or investment products.
              </i>
            </p>
            <p>
              Pacific Life Insurance Company (Newport Beach, CA) is licensed to
              issue insurance products in all states except New York. Product
              availability and features may vary by state. Fixed annuity
              products are available through licensed third parties.
            </p>
          </div>
        }
      />
    </div>
  );
};

export default NextDeferredIncomeAnnuity;
