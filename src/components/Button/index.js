import React from 'react';
import './styles.scss';

const Button = props => {
  return (
    <a href={props.link}>
      <button className="btn btn-primary rounded-pill">
        {props.buttonText}
      </button>
    </a>
  );
};

export default Button;
