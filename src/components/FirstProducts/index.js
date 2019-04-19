import React from 'react';
import './styles.scss';

//compnent
import Card from '../Card';

const FirstProducts = () => {
  return (
    <div className="nxt_gray pt-5 pb-5">
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

export default FirstProducts;
