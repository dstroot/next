import React from 'react';

// reveal
import Fade from 'react-reveal/Fade';

const SectionTwoColumns = props => {
  return (
    <div className={`py-6 ${props.styleBackground}`}>
      <div className="container text-left">
        <div className={`container ${props.styleTextAlign}`}>
          <Fade bottom>
            <h1 className={` ${props.sectionHeadStyle} `}>
              {props.sectionHead}
            </h1>
          </Fade>
          <div className="row">
            <Fade bottom>
              <div className={`col-md-5 ${props.styleLeft}`}>
                {props.contentLeft}
              </div>
            </Fade>
            <div className={`col-md-7 ${props.styleRight}`}>
              <div className="mt-5">
                <Fade bottom>
                  <h1 className="nxt_heading-xlarge">{props.heading}</h1>
                  <p className="mt-4">{props.contentRight}</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwoColumns;
