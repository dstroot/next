import React, { useEffect } from 'react';
// component
import SectionNotFound from '../../components/Sections/SectionHero/SectionNotFound';
import Footer from '../../components/Footer';

const NotFound = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Not Found`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionNotFound />
      <Footer />
    </div>
  );
};

export default NotFound;
