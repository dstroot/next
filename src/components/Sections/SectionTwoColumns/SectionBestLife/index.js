import React from 'react';
import { Parallax } from 'react-scroll-parallax';

// component
import SectionTwoColumns from '..';

// images
import yoga from './media/yogalady.svg';

// our component
const SectionBestLife = () => {
  return (
    <div id="bestlife">
      <Parallax className="custom-class" y={[0, 0]}>
        <SectionTwoColumns
          styleLeft="order-2 order-sm-1"
          styleRight="order-1 order-sm-2"
          styleBackground="bg-light"
          contentLeft={
            <img className="img-fluid p-5" src={yoga} alt="Yoga Lady" />
          }
          heading={
            <h1 className="nxt_heading-xlarge">Keep living your best life</h1>
          }
          contentRight="Everyone deserves a chance to do what they love.
                Next by Pacific Life helps you reach financial goals while you
                go after your personal ones..."
        />
      </Parallax>
    </div>
  );
};

export default SectionBestLife;
