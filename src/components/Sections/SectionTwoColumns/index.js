import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

//fix double containers

const SectionTwoColumns = props => {
  return (
    <div className={`py-6 ${props.styleBackground}`}>
      <div className="container">
        <Fade bottom>
          <h1
            className={`text-center nxt_heading-large ${props.sectionHeadStyle}`}
          >
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
                <div>
                  {props.heading}
                  {props.contentRight}
                </div>
              </Fade>
              {/* Optional div to bypass Fade */}
              <div>
                <div className="mt-4 pr-5">{props.noFadeContentRight}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwoColumns;
