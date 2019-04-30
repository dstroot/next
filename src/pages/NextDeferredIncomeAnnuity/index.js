import React, { useEffect } from 'react';

//components
import SectionStayInTouch from '../../components/Sections/SectionOneColumn/SectionStayInTouch';
import SectionBeginModestly from '../../components/Sections/SectionTwoColumns/SectionBeginModestly';
import SectionSafetyNet from '../../components/Sections/SectionTwoColumns/SectionSafetyNet';

const NextDeferredIncomeAnnuity = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Next Deffered Income Annuity`;
    // window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionSafetyNet />
      <SectionStayInTouch />
      <SectionBeginModestly />
    </div>
  );
};

export default NextDeferredIncomeAnnuity;
