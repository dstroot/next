import React from 'react';
import PropTypes from 'prop-types';

const FutureValue = ({ pv, rate, years }) => {
  let fv = pv * (1 + rate * years);
  return <div>Projected Monthly Income: {fv}</div>;
};

export default FutureValue;

FutureValue.propTypes = {
  number: PropTypes.number,
};
