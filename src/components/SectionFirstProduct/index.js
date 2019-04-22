import React from 'react';
import './styles.scss';

//compnent
import Card from '../Card';

const SectionFirstProduct = () => {
  return (
    <div className="nxt_bg-gray pt-6 pb-6">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <h1 class="slab">Introducing our first product</h1>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFirstProduct;
