import React from 'react';

// component
import SectionTwoColumns from '..';

// reveal
import Fade from 'react-reveal/Fade';

// import image
import womanphone from './media/womanphone.svg';

const SectionDesignWithYouInMind = () => {
  return (
    <div>
      <SectionTwoColumns
        styleTextAlign="text-center"
        sectionHead="Designed with you in mind"
        sectionHeadStyle="nxt_heading-large mb-5"
        contentLeft={<img src={womanphone} alt="Woman with the Phone" />}
        contentRight={
          <div>
            <Fade bottom>
              <h2 className="nxt_heading-small mb-2"> Fearlessly Flexible</h2>
            </Fade>
            <Fade bottom>
              <p className="mb-5">
                Our products adapt to your life’s biggest moments. Change them
                when your needs do.
              </p>
            </Fade>
            <Fade bottom>
              <h2 className="nxt_heading-small mb-2">Radically Simple</h2>
            </Fade>
            <Fade bottom>
              <p className="mb-5">
                Straight forward products and features. Know what you're getting
                from the beginning.
              </p>
            </Fade>
            <Fade bottom>
              <h2 className="nxt_heading-small mb-2">Brazenly Transparent</h2>
            </Fade>
            <Fade bottom>
              <p className="mb-5">No hidden fees or charges.</p>
            </Fade>
          </div>
        }
      />
    </div>
  );
};
export default SectionDesignWithYouInMind;
