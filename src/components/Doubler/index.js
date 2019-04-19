import React from 'react';
import PropTypes from 'prop-types';

const Doubler = ({ number }) => {
  let value = number * 2;
  return <div>Doubled number is: {value}</div>;
};

export default Doubler;

Doubler.propTypes = {
  number: PropTypes.number,
};
