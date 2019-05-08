import React, { useEffect } from 'react';

// component
import SectionBornInCalifornia from '../../components/Sections/SectionHero/SectionBornInCalifornia';
import SectionOurStory from '../../components/Sections/SectionTwoColumns/SectionOurStory';
import SectionDesignPrinciples from '../../components/Sections/SectionTwoColumns/SectionDesignPrinciples';
import SectionBackedByPL from '../../components/Sections/SectionOneColumn/SectionBackedByPL';

const About = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • About`;
    // window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionBornInCalifornia />
      <SectionOurStory />
      <SectionDesignPrinciples />
      <SectionBackedByPL />
    </div>
  );
};

export default About;
