import React from 'react';
import './styles.scss';

const Disclaimer = props => {
  return (
    <div className="container pb-6 disc-container">
      <div className="nxt_heading-xlarge text-center py-6">{props.header}</div>
      <div className="text-left">{props.content}</div>
    </div>
  );
};

export default Disclaimer;
