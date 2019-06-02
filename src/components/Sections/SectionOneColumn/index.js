import React from 'react';

//animation
import Fade from 'react-reveal/Fade';

const SectionOneColumn = props => {
  return (
    <div className={`py-6 ${props.styleBackground}`}>
      <div className="container text-center">
        <Fade bottom>
          <div className="nxt_heading-xlarge mb-5">{props.heading}</div>
          <div>{props.content}</div>
        </Fade>
        {/* Optional div to bypass Fade */}
        <div>{props.noFadeContent}</div>
      </div>
    </div>
  );
};

export default SectionOneColumn;
