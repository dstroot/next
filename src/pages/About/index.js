import React, { useEffect } from 'react';

const About = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • About`;
    // window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1>This is the About Page</h1>
    </div>
  );
};

export default About;
