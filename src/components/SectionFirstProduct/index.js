import React from 'react';

//compnent
import Card from '../Card';

const SectionFirstProduct = () => {
  return (
    <div className="nxt_bg-gray py-6">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 className="nxt_heading-xlarge">
              Introducing our first product
            </h1>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFirstProduct;
