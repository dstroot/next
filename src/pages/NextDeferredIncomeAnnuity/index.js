import React, { useEffect } from 'react';

const NextDeferredIncomeAnnuity = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Next Deffered Income Annuity`;
    // window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1>This is the DIA Page</h1>
    </div>
  );
};

export default NextDeferredIncomeAnnuity;
