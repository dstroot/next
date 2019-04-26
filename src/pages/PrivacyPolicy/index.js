import React, { useEffect } from "react";
import "./styles.scss";

const PrivacyPolicy = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • PrivacyPolicy`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1>PrivacyPolicy!</h1>
    </div>
  );
};

export default PrivacyPolicy;
