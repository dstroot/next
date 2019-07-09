import React, { useEffect } from 'react';

// component
import Footer from '../../components/Footer';
<<<<<<< HEAD
import FaqCard from '../../components/FaqCard';
import Accordion from '../../components/Accordion';
=======
>>>>>>> 4c6d6ef83a6bd5731e0f160b345a7eed1774ff1b

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
