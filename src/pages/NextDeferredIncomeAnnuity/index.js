import React, { useEffect } from 'react';

//components
import SectionDeferedIncomeAnnuity from '../../components/Sections/SectionHero/SectionDeferedIncomeAnnuity';
import SectionSafetyNet from '../../components/Sections/SectionTwoColumnsMultipleRows/SectionSafetyNet';
import SectionStayInTouch from '../../components/Sections/SectionOneColumn/SectionStayInTouch';
import SectionBeginModestly from '../../components/Sections/SectionTwoColumns/SectionBeginModestly';
import SectionHowItWorks from '../../components/Sections/SectionThreeColumns/SectionHowItWorks';
import SectionQuoteToday from '../../components/Sections/SectionOneColumn/SectionQuoteToday';

const NextDeferredIncomeAnnuity = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Next Deffered Income Annuity`;
  });

  return (
    <div>
      <SectionDeferedIncomeAnnuity />
      <SectionSafetyNet />
      <SectionStayInTouch />
      <SectionBeginModestly />
      <SectionHowItWorks />
      <SectionQuoteToday />
    </div>
  );
};

export default NextDeferredIncomeAnnuity;
