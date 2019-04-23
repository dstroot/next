import React from 'react';
import './styles.scss';

// images
import tree from './media/evergreen.svg';

//componets
import Button from '../Button'

const Card = () => {
  return (
    <div className="mt-5">
      <div className="card mx-auto border-dark mb-3" style={{ width: '18rem' }}>
        <div className="card-body text-center">
          <img src={tree} alt="Evergreen"/>
          <h5 className="card-title">Next Deferred Income Annuity</h5>
          <p className="card-text">
            Create a future income stream you can count on for the rest of your
            life by saving over time.
          </p>
          <Button buttonText = {"Learn More"} link = {"https:/google.com/"}>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
