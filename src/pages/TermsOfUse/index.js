import React, { useEffect } from "react";
import "./styles.scss";

const TermsOfUse = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • TermsOfUse`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1>TermsOfUse!</h1>
    </div>
  );
};

export default TermsOfUse;
