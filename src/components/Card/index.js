import React from 'react';
import './styles.scss';

// Router
import { Router } from '@reach/router';

// images
import tree from './media/evergreen.svg';

//components
import Button from '../Button';

import NextDeferredIncomeAnnuity from '../../pages/NextDeferredIncomeAnnuity';

const Card = () => {
  return (
    <div className="card mx-auto my-5 card border-dark mb-3 nxt_rounded-corner p-3 nxt_card-width">
      <div className="card-body text-center">
        <img src={tree} alt="Evergreen" />
        <h5 className="card-title nxt_heading-small mb-4">
          Next Deferred Income Annuity
        </h5>
        <p className="card-text circular mb-5">
          Create a future income stream you can count on for the rest of your
          life by saving over time.
        </p>
        <Button
          path="../../pages/NextDeferredIncomeAnnuity"
          buttonText="Learn More"
        />
      </div>
    </div>
  );
};

export default Card;
