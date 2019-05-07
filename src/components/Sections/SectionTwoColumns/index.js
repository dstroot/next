import React from 'react';

// Animation
import Fade from 'react-reveal/Fade';

//fix double containers

const SectionTwoColumns = props => {
  return (
    <div className={`py-6 ${props.styleBackground}`}>
      <div className="container text-left">
        {/* delete the extra container */}
        <div className={`container ${props.styleTextAlign}`}>
          <Fade bottom>
            <h1 className={` nxt_heading-xlarge ${props.sectionHeadStyle} `}>
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
                  <div className="mt-4 pr-5">{props.contentRight}</div>
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
