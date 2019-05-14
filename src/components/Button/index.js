import React from 'react';
import { Link } from '@reach/router';

const Button = props => {
  return (
    <Link to={props.path}>
      <a href={props.href} target="_blank">
        <button className="btn btn-primary rounded-pill nxt_body-small px-4 py-2">
          {props.buttonText}
        </button>
      </a>
    </Link>
  );
};

export default Button;
