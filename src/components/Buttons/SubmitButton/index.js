import React from 'react';

const SubmitButton = props => {
  return (
    <button
      className={`btn btn-primary nxt_rounded-pill nxt_body-small px-4 py-2 ${props.type}`}
    >
      {props.buttonText}
    </button>
  );
};

export default SubmitButton;
