import React from 'react';

//compnent
import Card from '../../../Card';
import SectionOneColumn from '..';

// images
import Tree from '../../../Card/media/evergreen.svg';

const SectionFirstProduct = () => {
  return (
    <SectionOneColumn
      styleBackground="bg-light"
      sectionHeadStyle="nxt_heading-xlarge"
      sectionHead="Introducing our first product"
      content={
        <Card
          img={Tree}
          title="Next Deferred Income Annuity"
          content="Create a future income stream you can count on for the rest of your life by saving over time."
        />
      }
    />
  );
};

export default SectionFirstProduct;
