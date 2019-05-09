import React from 'react';
import './styles.scss';

const Card = props => {
  return (
    <div className="card mx-auto my-5 card border-dark mb-3 nxt_rounded-corner p-3 nxt_card-width">
      <div className="card-body text-center">
        <img src={props.img} alt="Evergreen" className="mb-2" />
        <h5 className="card-title nxt_heading-small mb-4">{props.title}</h5>
        <p className="card-text circular mb-5">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
