import React from 'react';

const Disclaimer = props => {
  return (
    <div className="container mb-6">
      <div className="nxt_heading-xlarge text-center py-6">{props.header}</div>
      <div className="text-left">{props.content}</div>
    </div>
  );
};

export default Disclaimer;
