import React from 'react';
import Form from '../Form';

const SectionAskUs = () => {
  return (
    <div className="nxt_bg-gray py-6">
      <div className="container text-center">
        <h1 className="nxt_heading-large mb-5">Ask us anything</h1>
        <div className="row">
          <div className="col-md-6">
            <Form />
          </div>
          <div className="col-md-6 text-left">
            <h2>Next by Pacific Life</h2>
            <a href="mailto: hello@meetnext.com">hello@meetnext.com</a>
            <p>(833) 646-NEXT (6398) </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAskUs;
