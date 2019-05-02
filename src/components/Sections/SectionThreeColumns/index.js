import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

const SectionThreeColumns = props => {
  return (
    <div className={`${props.stylePadding} ${props.styleBackground}`}>
      <div className="container text-center">
        <div className={`container ${props.styleTextAlign}`} />
        <Fade bottom>
          <h1 className={` nxt_heading-xlarge ${props.sectionHeadStyle} `}>
            {props.sectionHead}
          </h1>
        </Fade>
        <div className={`row ${props.styleColumnAlign}`}>
          <Fade bottom>
            <div className={'col-md-4 mt-5'}>{props.contentLeft}</div>
            <div className={'col-md-4 mt-5'}>{props.contentMiddle}</div>
            <div className={'col-md-4 mt-5'}>{props.contentRight}</div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SectionThreeColumns;
