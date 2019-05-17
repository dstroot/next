import React from 'react';

const ExternalLinkButton = props => {
  return (
    <a href={props.link} target={props.target}>
      <button className="btn btn-primary rounded-pill nxt_body-small px-4 py-2">
        {props.buttonText}
      </button>
    </a>
  );
};

export default ExternalLinkButton;
