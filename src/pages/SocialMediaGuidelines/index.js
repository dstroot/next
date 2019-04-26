import React, { useEffect } from "react";
import "./styles.scss";

const SocialMediaGuidelines = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • SocialMediaGuidelines`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <h1>SocialMediaGuidelines!</h1>
    </div>
  );
};

export default SocialMediaGuidelines;
