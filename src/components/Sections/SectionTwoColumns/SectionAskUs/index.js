import React from 'react';

//import components
import Form from '../../../Form';
import SectionTwoColumns from '../../SectionTwoColumns';

const SectionAskUs = () => {
  return (
    <SectionTwoColumns
      styleBackground="bg-light"
      styleTextAlign="text-center"
      sectionHeadStyle="nxt_heading-large"
      sectionHead="Ask us anything"
      styleLeft="order-2 mt-5 text-left"
      contentLeft={
        <div>
          <h2>Next by Pacific Life</h2>
          <a href="mailto: hello@meetnext.com">hello@meetnext.com</a>
          <p>(833) 646-NEXT (6398) </p>
        </div>
      }
      styleRight="order-1"
      styleRight="text-left"
      contentRight={<Form />}
    />
  );
};

export default SectionAskUs;

{
  /* <div className="nxt_bg-gray py-6">
      <div className="container text-center">
        <h1 className="nxt_heading-large mb-5">Ask us anything</h1>
        <div className="row">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6 text-left mt-4">
            <h2>Next by Pacific Life</h2>
            <a href="mailto: hello@meetnext.com">hello@meetnext.com</a>
            <p>(833) 646-NEXT (6398) </p>
          </div>
        </div>
      </div>
    </div> */
}
