import React, { useEffect } from 'react';
// component
import SectionHereToHelp from '../../components/Sections/SectionHero/SectionHereToHelp';
import SectionAskUs from '../../components/Sections/SectionTwoColumns/SectionAskUs';

const Contact = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Contact`;
  });

  return (
    <div>
      <SectionHereToHelp />
      <SectionAskUs />
    </div>
  );
};

export default Contact;
