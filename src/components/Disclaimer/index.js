import React from 'react';

const Disclaimer = props => {
  return (
    <div className="container mb-6">
      <h1 className="nxt_heading-xlarge text-center py-6">{props.header}</h1>
      <p className="text-left">{props.content}</p>
    </div>
  );
};

export default Disclaimer;
