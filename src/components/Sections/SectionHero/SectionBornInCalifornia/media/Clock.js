import React from 'react';
import Tween, { TweenMax } from 'gsap';

// SVG styles
const st0 = {
  fill: '#F2F4F7',
};

const st1 = {
  fill: '#FFFFFF',
};

const clockBody = {
  width: '10vh',
  minWidth: '50px',
  position: 'absolute',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '40px',
  left: '0',
  right: '0',
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.secondHand = null;
    this.minuteHand = null;
    this.moveHand = null;
  }

  componentDidMount() {
    this.moveHand = TweenMax.to(this.secondHand, 58, {
      rotation: 360,
      repeat: -1,
      transformOrigin: '90% 100%',
      ease: 'Linear.easeNone',
    });
    this.moveHand = TweenMax.to(this.minuteHand, 500, {
      rotation: 360,
      repeat: -1,
      transformOrigin: '10% 10%',
      ease: 'Linear.easeNone',
    });
  }

  render() {
    return (
      <svg
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 97 95"
        // style={{ enableBackground: 'new 0 0 97 95' }}
        style={clockBody}
      >
        <g id="Clock-Frame">
          <path
            style={st0}
            d="M39.3,1.1c0,0-21.6,4.9-31.6,19.7c-10,14.8-10,33.8-3.8,48.3c7.1,16.2,17.7,23.1,34.2,25
		c16.5,1.9,34.6-0.2,45.5-13.9c10.9-13.7,16.2-25.7,10.9-44.5C89.4,16.8,74.2-4.4,39.3,1.1z"
          />
          <path
            style={st1}
            d="M45.3,6.1c0,0-31,4.1-37.4,32.5C1.5,67,18.4,84.5,40,87.5c21.6,3,48.7-3.8,50.2-37.2
		C91.7,16.8,61.4,1.1,45.3,6.1z"
          />
        </g>
        <g id="Lines">
          <path
            style={st0}
            d="M46.8,8.4c-0.6,0-1.3,0.6-1.3,1.3v5.1c0,0.6,0.4,1.3,1.3,1.3c0.6,0,1.3-0.4,1.3-1.3V9.7
		C48.1,9,47.7,8.4,46.8,8.4z"
          />
          <path
            style={st0}
            d="M46.8,79.4c-0.6,0-1.3,0.6-1.3,1.3v4.3c0,0.6,0.4,1.3,1.3,1.3c0.6,0,1.3-0.4,1.3-1.3v-4.3
		C48.1,80,47.7,79.4,46.8,79.4z"
          />
          <path
            style={st0}
            d="M88.1,48.8h-5.8c-0.6,0-1.3,0.6-1.3,1.3c0.2,0.9,0.6,1.3,1.3,1.3h5.8c0.6,0,1.3-0.6,1.3-1.3
		S88.7,48.8,88.1,48.8z"
          />
          <path
            style={st0}
            d="M13.4,49H9.2c-0.6,0-1.1,0.4-1.1,1.1s0.4,1.1,1.1,1.1h4.3c0.6,0,1.1-0.4,1.1-1.1C14.5,49.6,14.1,49,13.4,49z"
          />
        </g>
        <g ref={div => (this.secondHand = div)}>
          <path
            id="Second-Hand"
            style={st0}
            d="M50.4,46L39.9,23.3c-0.2-0.6-0.9-0.9-1.5-0.6s-0.9,0.9-0.6,1.5l10.5,22.7
	c0.2,0.6,0.9,0.9,1.5,0.6C50.4,47.2,50.6,46.6,50.4,46z"
          />
        </g>
        <path
          id="Hour-Hand"
          style={st0}
          d="M49.2,48.8L49.2,48.8c-1.4,0-2.5-1.1-2.5-2.5V23.8c0-1.4,1.1-2.5,2.5-2.5h0
	c1.4,0,2.5,1.1,2.5,2.5v22.5C51.7,47.7,50.6,48.8,49.2,48.8z"
        />
        <g ref={div => (this.minuteHand = div)}>
          <path
            id="Minute-Hand"
            style={st0}
            d="M47.1,45.1L47.1,45.1c0.7-1.2,2.2-1.6,3.4-0.9l30.3,17.5c1.2,0.7,1.6,2.2,0.9,3.4v0
	c-0.7,1.2-2.2,1.6-3.4,0.9L48.1,48.5C46.9,47.8,46.4,46.3,47.1,45.1z"
          />
        </g>
      </svg>
    );
  }
}

export default Clock;
