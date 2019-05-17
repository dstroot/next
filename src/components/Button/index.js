import React from 'react';
import { Link } from '@reach/router';

const Button = props => {
  return (
    <Link to={props.path}>
      <a href={props.href} target={props.target}>
        <button
          className="btn btn-primary rounded-pill nxt_body-small px-4 py-2"
          type={props.type}
        >
          {props.buttonText}
        </button>
      </a>
    </Link>
  );
};

export default Button;
