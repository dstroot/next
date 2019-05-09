import React from 'react';

//compnent
import Card from '../../../Card';
import SectionOneColumn from '..';
import Button from '../../../Button';

// images
import Tree from '../../../Card/media/evergreen.svg';

const SectionFirstProduct = () => {
  return (
    <SectionOneColumn
      styleBackground="bg-light"
      heading="Introducing our first product"
      content={
        <Card
          img={Tree}
          title="Next Deferred Income Annuity"
          content={
            <div>
              <p className="mb-5">
                Create a future income stream you can count on for the rest of
                your life by saving over time.
              </p>
              <Button
                path="/nextdeferredincomeannuity"
                buttonText="Learn More"
              />
            </div>
          }
        />
      }
    />
  );
};

export default SectionFirstProduct;
