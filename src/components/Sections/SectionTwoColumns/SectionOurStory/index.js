import React from 'react';

//components
import SectionTwoColumns from '../../SectionTwoColumns';

//image
import ourstorygroup from '../../SectionTwoColumns/SectionOurStory/media/ourstorygroup.svg';

const SectionOurStory = () => {
  return (
    <SectionTwoColumns
      styleBackground="bg-light"
      contentLeft={
        <img
          className="img-fluid pd-5 mq-tall-image"
          src={ourstorygroup}
          alt="Our Story Group"
        />
      }
      heading="Our Story"
      contentRight="We started Next by Pacific Life with the goal of creating a better, seamless digital experience for the modern investor. We talked to all types of customers. What became clear is customers wanted simple, easy-to-understand products with clear value propositions. We are creating transparent products and an engaging customer experience by starting with the customer and working backwards."
      styleLeft="order-2"
      styleRight="order-1"
    />
  );
};

export default SectionOurStory;
