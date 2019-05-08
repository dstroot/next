import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

const SectionThreeColumns = props => {
  return (
    <div className={`${props.stylePadding} ${props.styleBackground}`}>
      <div className="container text-center">
        <Fade bottom>
          <h1 className="nxt_heading-xlarge">{props.heading}</h1>
        </Fade>
        <div className={`row ${props.styleColumnAlign}`}>
          <Fade bottom>
            <div className={'col-md-4 my-4'}>{props.contentLeft}</div>
            <div className={'col-md-4 my-4'}>{props.contentMiddle}</div>
            <div className={'col-md-4 my-4'}>{props.contentRight}</div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionThreeColumns;
