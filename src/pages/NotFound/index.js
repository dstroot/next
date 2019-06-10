import React, { useEffect } from 'react';
// component
import SectionHero from '../../components/Sections/SectionHero';
import Footer from '../../components/Footer';

const NotFound = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • 404`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionHero
        // backgroundImage={background}
        heading={<h1 className="nxt_heading-xlarge">You Just Got 404'd</h1>}
        content="Uh Oh! You reached a page that does not exist."
      />
      <Footer />
    </div>
  );
};

export default NotFound;
