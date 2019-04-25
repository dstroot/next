import React, { useEffect } from 'react';

const Contact = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • Contact`;
    // window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1>This is the Contact Page</h1>
    </div>
  );
};

export default Contact;
