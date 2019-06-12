import React, { useEffect } from 'react';
// component
import SectionHero from '../../components/Sections/SectionHero';
import Footer from '../../components/Footer';
import Button from '../../components/Buttons/Button';

const NotFound = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • 404`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <SectionHero
        heading={
          <div>
            <h1 className="nxt_heading-xlarge">404</h1>
            <h2>Who turned out the lights?</h2>
          </div>
        }
        content={
          <div>
            <p>
              It sure is dark in here. We’ll send out the electrician, you head
              back to the light and try again.
            </p>
            <Button buttonText="Take me home!" path="/" />
          </div>
        }
      />
      <Footer />
    </div>
  );
};

export default NotFound;
