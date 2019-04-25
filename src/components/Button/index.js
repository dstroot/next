import React from 'react';
import { Link } from '@reach/router';

const Button = props => {
  return (
    <Link to={props.path}>
      <button className="btn btn-primary rounded-pill nxt_body-small px-4 py-2">
        {props.buttonText}
      </button>
    </Link>
  );
};

export default Button;
