import React from 'react';
import './styles.scss';

// images
import tree from './media/evergreen.svg';

const Card = () => {
  return (
    <div className="card mx-auto" style={{ width: '18rem' }}>
      <div className="card-body text-center">
        <img src={tree} alt="Evergreen" />
        <h5 className="card-title">Next Deferred Income Annuity</h5>
        <p className="card-text">
          Create a future income stream you can count on for the rest of your
          life by saving over time.
        </p>
        <a href="/" className="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
