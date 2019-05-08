import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring, presets } from 'react-motion';

// From: https://codepen.io/du5rte/pen/EyRVkJ
const HamburgerButton = ({ toggler, clicked }) => {
  const style = {
    overflow: 'visible',
    cursor: 'pointer',
    // disable touch highlighting on devices
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  };

  return (
    <svg viewBox="0 0 96 96" height="1.3em" onClick={toggler} style={style}>
      <Motion
        style={{
          x: spring(clicked ? 1 : 0, presets.wobbly),
          y: spring(clicked ? 0 : 1, presets.wobbly),
        }}
      >
        {({ x, y }) => (
          <g
            id="navicon"
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line
              transform={`translate(${x * 12}, ${x * -7}) rotate(${x *
                45}, 7, 26)`}
              x1="7"
              y1="26"
              x2="89"
              y2="26"
            />
            <line
              transform={`translate(${x * 12}, ${x * 7}) rotate(${x *
                -45}, 7, 70)`}
              x1="7"
              y1="70"
              x2="89"
              y2="70"
            />
            <line
              transform={`translate(${x * -96})`}
              opacity={y}
              x1="7"
              y1="48"
              x2="89"
              y2="48"
            />
          </g>
        )}
      </Motion>
    </svg>
  );
};

export default HamburgerButton;

HamburgerButton.propTypes = {
  /** Function to toggle button clicked state */
  toggler: PropTypes.func.isRequired,
  /** Should be set to "true" if the button has been clicked */
  clicked: PropTypes.bool.isRequired,
};
