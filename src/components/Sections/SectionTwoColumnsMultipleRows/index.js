import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

const SectionTwoColumnsMultipleRows = props => {
  return (
    <div className={`py-6 ${props.styleBackground}`}>
      <div className={`container ${props.styleTextAlign}`}>
        <Fade>{props.sectionHead}</Fade>
        <Fade>
          <div>{props.content}</div>
        </Fade>
      </div>
    </div>
  );
};

export default SectionTwoColumnsMultipleRows;
