import React from 'react';

//import components
import Contactform from '../../../Contactform';
import SectionTwoColumns from '../../SectionTwoColumns';

const SectionAskUs = () => {
  return (
    <SectionTwoColumns
      styleBackground="bg-light"
      sectionHead="Ask us anything"
      styleLeft="order-2 mt-5 text-left"
      contentLeft={
        <div>
          <h2>Next by Pacific Life</h2>
          <a href="mailto: hello@meetnext.com">hello@meetnext.com</a>
          <p>(833) 646-NEXT (6398) </p>
        </div>
      }
      styleRight="order-1 text-left"
      contentRight={<Contactform />}
    />
  );
};

export default SectionAskUs;
