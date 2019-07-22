import React, { useEffect } from 'react';

// component
import Footer from '../../components/Footer';
import FaqCard from '../../components/FaqCard';
import Accordion from '../../components/Accordion';

const Faq = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • FAQ`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <FaqCard />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Faq;
