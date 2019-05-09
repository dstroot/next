import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

const SectionTwoColumnsMultipleRows = props => {
  return (
    <div className={`py-6 ${props.styleBackground}`}>
      <div className={`container ${props.styleTextAlign}`}>
        <Fade>
          <h1 className="nxt_heading-xlarge">{props.sectionHead}</h1>
        </Fade>
        <Fade>
          <div>{props.content}</div>
        </Fade>
      </div>
    </div>
  );
};

export default SectionTwoColumnsMultipleRows;
