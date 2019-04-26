import React from 'react';

//compnent
import Card from '../../Card';

// images
import Tree from '../../Card/media/evergreen.svg';

const SectionFirstProduct = () => {
  return (
    <div className="nxt_bg-gray py-6">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="nxt_heading-xlarge">
              Introducing our first product
            </h1>
            <Card
              img={Tree}
              title="Next Deferred Income Annuity"
              content="Create a future income stream you can count on for the rest of your life by saving over time."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFirstProduct;
