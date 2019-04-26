import React, { useEffect } from 'react';

//components
import SectionStayInTouch from '../../components/Sections/SectionStayInTouch';
import SectionBeginModestly from '../../components/Sections/SectionBeginModestly';
import SectionPlaysNice from '../../components/Sections/SectionPlaysNice';
import SectionSafetyNet from '../../components/Sections/SectionSafetyNet';

const NextDeferredIncomeAnnuity = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Next Deffered Income Annuity`;
    // window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionSafetyNet />
      <SectionPlaysNice />
      <SectionStayInTouch />
      <SectionBeginModestly />
    </div>
  );
};

export default NextDeferredIncomeAnnuity;
