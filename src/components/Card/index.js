import React from 'react';
import './styles.scss';

// images
import tree from './media/evergreen.svg';

//components
import Button from '../Button';

const Card = () => {
  return (
    <div
      className="card mx-auto my-5 card border-dark mb-3 rounded-lg p-3"
      style={{ width: '24rem' }}
    >
      <div className="card-body text-center">
        <img src={tree} alt="Evergreen" />
        <h5 className="card-title heading-small mb-4">
          Next Deferred Income Annuity
        </h5>
        <p className="card-text circular mb-5">
          Create a future income stream you can count on for the rest of your
          life by saving over time.
        </p>
        <Button buttonText="Learn More" link="https://google.com" />
      </div>
    </div>
  );
};

export default Card;
