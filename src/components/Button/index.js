import React from 'react';

const Button = props => {
  return (
    <button className="btn btn-primary rounded-pill nxt_body-small px-4 py-2">
      {props.buttonText}
    </button>
  );
};

export default Button;
