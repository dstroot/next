import React, { useEffect } from 'react';
// component
import SectionHereToHelp from '../../components/Sections/SectionHero/SectionHereToHelp';
import SectionAskUs from '../../components/Sections/SectionTwoColumns/SectionAskUs';
import Footer from '../../components/Footer';

const Contact = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Contact`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionHereToHelp />
      <SectionAskUs />
      <Footer />
    </div>
  );
};

export default Contact;
