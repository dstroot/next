import React, { useEffect } from 'react';

// component
import SectionBornInCalifornia from '../../components/Sections/SectionHero/SectionBornInCalifornia';

const About = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • About`;
    // window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionBornInCalifornia />
    </div>
  );
};

export default About;
