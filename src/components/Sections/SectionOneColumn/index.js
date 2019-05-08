import React from 'react';

//animation
import Fade from 'react-reveal/Fade';

const SectionOneColumn = props => {
  return (
    <div className={`py-6 ${props.styleBackground}`}>
      <div className="container text-center">
        <Fade bottom>
          <h1 className="nxt_heading-xlarge mb-5">{props.heading}</h1>
          <div>{props.content}</div>
        </Fade>
      </div>
    </div>
  );
};

export default SectionOneColumn;
