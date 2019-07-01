import React, { useEffect } from 'react';

// component
import SectionHero from '../../components/Sections/SectionHero';
import Footer from '../../components/Footer';

const Faq = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • FAQ`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionHero
        heading={
          <div>
            <h1 className="nxt_heading-xlarge">FAQ</h1>
          </div>
        }
        content={<div />}
      />
      <Footer />
    </div>
  );
};

export default Faq;
