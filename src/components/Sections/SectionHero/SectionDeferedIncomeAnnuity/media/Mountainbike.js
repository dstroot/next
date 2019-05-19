import React from 'react';
import { TweenMax } from 'gsap';

// SVG styles
const st0 = {
  fill: '#DDD2C7',
};

const st1 = {
  fill: '#5B4C43',
};

const st2 = {
  fill: '#F2D292',
};

const st3 = {
  fill: '#3C444C',
};

const st4 = {
  fill: '#333350',
};

const st5 = {
  fill: '#3D3F3F;',
};

const st6 = {
  fill: '#EADDD0',
};

const st7 = {
  fill: '#736357',
};

const st8 = {
  fill: '#03A678',
};

const st9 = {
  fill: '#4D4D4D',
};

const st10 = {
  fill: '#534741',
};

const st11 = {
  fill: '#B4C7BA',
};

const st12 = {
  opacity: '0.37',
  fill: '#3D3F3F',
  enableBackground: 'new',
};

// Position SVG
const bikeBody = {
  width: '16vw',
  minWidth: '105px',
  position: 'absolute',
  bottom: '4%',
  left: '-200px',
  zIndex: '999',
};

// Find Device width
const deviceWidth = window.innerWidth;

class Mountainbike extends React.Component {
  constructor(props) {
    super(props);
    this.bike = null;
    this.wheel = null;
    this.moveBike = null;
    this.spinWheel = null;
  }

  componentDidMount() {
    this.moveBike = TweenMax.to(this.bike, 18, {
      x: deviceWidth + 1600,
      repeat: -1,
      ease: 'Linear.easeNone',
    });
    this.spinWheel = TweenMax.to([this.wheel, this.wheelFront], 3, {
      rotation: 360,
      repeat: -1,
      transformOrigin: '50% 50%',
      ease: 'Linear.easeNone',
    });
  }

  render() {
    return (
      <div style={bikeBody} ref={div => (this.bike = div)}>
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 243.8 274.7"
          // style="enable-background:new 0 0 243.8 274.7;"
        >
          <g id="Left-Leg">
            <path
              style={st0}
              d="M107.4,165.8c4.7-0.4,9.4,0.3,13.8,2c0.7,0.3,1.6,0.6,2,1.3c0.4,0.6,0.6,1.4,0.6,2.1
		c0.4,5.7,0.7,11.3,1.1,16.9c0.3,4.5,0.6,9.1,0.4,13.6c-0.3,4.3-1.8,8.1-2.3,12.3c-1,9.8-2.8,19.6-4.8,29.2c-1.6,0-3.1,0-4.7,0.1
		c0,0,0.6-12.2,0.6-12.9c0.1-2.8,1-5.5,1.1-8.5c0.1-3.3,0.1-6.7,0.1-9.9c0-3.3,0-6.7-0.7-9.9c-0.4-2-1.1-4-1.8-5.8
		c-3.5-9.6-7.2-19.1-10.8-28.8C103.6,166.5,105.4,166,107.4,165.8z"
            />
            <path
              style={st1}
              d="M125.3,102.3c0.6,0.7,1.1,2.1,1.1,3c-0.3,21.4,0.1,45.2-0.1,66.6c-8.1,1.1-16.4,1.1-24.5,0.3
		C91.1,145,80.3,117.1,80.6,87.9c14.5,5.2,29.1,10.5,43.5,15.7C125.1,104,124.8,101.5,125.3,102.3z"
            />
            <path
              style={st2}
              d="M131.4,247c0.6,0.9,0.3,2-1.6,3c-5.1,3-11.8,2.7-16.7-0.4c-0.9-0.6-1.6-1.1-2.6-1.6c-1.7-0.9-4-1-4.8-2.6
		c-1-1.7,0.3-3.8,1.6-5.4c1-1.4,1.6-2.7,3.5-2c3.5,1.3,7.1,2.4,10.5,4.1c2.1,1.1,4.3,2.3,6.7,2.8C129.4,245.3,130.8,246.1,131.4,247
		z"
            />
          </g>
          <g id="Back-Wheel" ref={div => (this.wheel = div)}>
            <path
              style={st3}
              d="M28,269.1c22.8,11.1,54.6-8.2,55.7-33.4c0.6-13.9-7.1-29.7-18-37.3
	c-10.3-7.1-23.7-7.9-35.5-4.5c-5.6,1.6-11.3,3.8-15.4,8.2c-2.4,2.6-4.9,5.1-6.9,7.9c-6.4,9.2-7.3,22-4.2,32.5
	c2.9,10,9.6,18.9,18.7,24.1C24.2,267.6,26.1,268.2,28,269.1z M16.7,215.7c0.7-1,1.6-2.1,2.3-3c8.1,6.5,11.2,9.5,19,16.3
	c0,0,0,0,0,0.1c-0.4,0.4-0.7,0.9-0.9,1.6c-0.4,1-0.4,2-0.3,3.1L14,240.1C10.6,231.5,11.3,223.8,16.7,215.7z M47.5,231.9
	c0-0.6-0.3-1-0.4-1.6c-0.1-0.1-0.1-0.4-0.3-0.6c0,0,21.1-16.3,21.1-16.3c3.8,4.4,5.6,10.5,6.2,16.2c0,0.3-24,1.9-26.2,2.3
	C47.8,231.9,47.7,231.9,47.5,231.9z M36.8,201.8c1.5,10.6,2,16.2,4.3,25.3c-1.1,0.1-1.8,0.5-2.5,1.4c-7.8-6.8-11-10-19-16.5
	C24.3,207.1,29.6,202.8,36.8,201.8z M67.4,212.4l-21.1,16.9c-0.7-0.9-1.4-1.8-2.5-2c-0.6-0.3-1.4-0.5-2.1-0.4
	c-2.3-9.1-2.4-16-4-25.1c6.4-0.9,12.3-0.2,17.6,1.5C60.4,204.8,63.9,208.3,67.4,212.4z M66.2,253c-5.7-5.5-13.8-11.8-19.6-17.2
	c0.7-1,1.1-2.3,1.1-3.4l26.5-2.1c0.4,2.4-0.2,4.1-0.5,6.5C72.5,242.9,71.1,247.2,66.2,253z M25.7,257l13.7-19.6
	c1.3,0.7,2.6,1,4.1,0.6c1.7,7.2,6.6,16.3,7.8,23.5l0.6-0.1c-1.4-7.2-6.1-16.3-7.8-23.5c0.1,0,0.1,0,0.3-0.1c0.7-0.3,1.1-0.7,1.7-1.3
	c6,5.2,14,11.4,19.6,17c0.3,0.3-7.5,5.3-8.3,5.7c-2.7,1.4-5.6,2.4-8.6,3c-6.1,1.3-12.3,1.5-18-1.5C28.8,259.6,27.4,258.6,25.7,257z
	 M15.7,243.5c-0.4-1-1-1.8-1.3-2.8l22.7-6.3c0,0.1,0.1,0.4,0.3,0.6c0.4,0.9,1,1.6,1.7,2L25,256.2c-1.3-1.3-2.6-2.7-3.7-4.1
	C18.9,249.3,17.1,246.3,15.7,243.5z"
            />
          </g>
          <g id="Front-Wheel" ref={div => (this.wheelFront = div)}>
            <path
              style={st3}
              d="M186.8,269.1c22.8,11.1,54.6-8.2,55.7-33.4c0.6-13.9-7.1-29.7-18-37.3
	c-10.3-7.1-23.7-7.9-35.5-4.5c-5.6,1.6-11.3,3.8-15.4,8.2c-2.4,2.6-4.9,5.1-6.9,7.9c-6.4,9.2-7.3,22-4.2,32.5
	c2.9,10,9.6,18.9,18.7,24.1C183,267.6,184.9,268.2,186.8,269.1z M175.5,215.7c0.7-1,1.6-2.1,2.3-3c8.1,6.5,11.2,9.5,19,16.3
	c0,0,0,0,0,0.1c-0.4,0.4-0.7,0.9-0.9,1.6c-0.4,1-0.4,2-0.3,3.1l-22.9,6.3C169.4,231.5,170.1,223.8,175.5,215.7z M206.3,231.9
	c0-0.6-0.3-1-0.4-1.6c-0.1-0.1-0.1-0.4-0.3-0.6c0,0,21.1-16.3,21.1-16.3c3.8,4.4,5.6,10.5,6.2,16.2c0,0.3-24,1.9-26.2,2.3
	C206.6,231.9,206.5,231.9,206.3,231.9z M195.6,201.8c1.5,10.6,2,16.2,4.3,25.3c-1.1,0.1-1.8,0.5-2.5,1.4c-7.8-6.8-11-10-19-16.5
	C183.1,207.1,188.4,202.8,195.6,201.8z M226.2,212.4l-21.1,16.9c-0.7-0.9-1.4-1.8-2.5-2c-0.6-0.3-1.4-0.5-2.1-0.4
	c-2.3-9.1-2.4-16-4-25.1c6.4-0.9,12.3-0.2,17.6,1.5C219.2,204.8,222.7,208.3,226.2,212.4z M225,253c-5.7-5.5-13.8-11.8-19.6-17.2
	c0.7-1,1.1-2.3,1.1-3.4l26.5-2.1c0.4,2.4-0.2,4.1-0.5,6.5C231.3,242.9,229.9,247.2,225,253z M184.5,257l13.7-19.6
	c1.3,0.7,2.6,1,4.1,0.6c1.7,7.2,6.6,16.3,7.8,23.5l0.6-0.1c-1.4-7.2-6.1-16.3-7.8-23.5c0.1,0,0.1,0,0.3-0.1c0.7-0.3,1.1-0.7,1.7-1.3
	c6,5.2,14,11.4,19.6,17c0.3,0.3-7.5,5.3-8.3,5.7c-2.7,1.4-5.6,2.4-8.6,3c-6.1,1.3-12.3,1.5-18-1.5
	C187.6,259.6,186.2,258.6,184.5,257z M174.5,243.5c-0.4-1-1-1.8-1.3-2.8l22.7-6.3c0,0.1,0.1,0.4,0.3,0.6c0.4,0.9,1,1.6,1.7,2
	l-14.1,19.2c-1.3-1.3-2.6-2.7-3.7-4.1C177.7,249.3,175.9,246.3,174.5,243.5z"
            />
          </g>
          <g id="Bike-Frame">
            <path
              style={st4}
              d="M206.9,136.5c3.8,0.1,9.5,0.3,11.3-2.1c1.8-2.6-1.3-5.8-3.4-7.8c-0.9-0.8,1.3-1.8,2.4-1
		c4,2.4,7.2,6.8,5.1,10.1c-2.3,3.7-10.4,4-16,3.4C203.9,138.6,204.5,136.5,206.9,136.5z"
            />
            <path
              style={st3}
              d="M101.5,159.5c7.1,0.6,14.6,0,21.7-0.3c7.7-0.1,15.3-0.4,22.8-0.9c7.7-0.3,15.2-0.7,22.8-1.1
		c7.5-0.4,15.3-1.6,22.8-1.1c1.3,0,1.7,2.1,0.3,2.4c-7.1,1.4-14.7,1.6-22,2c-7.7,0.6-15.2,1-22.8,1.4c-7.7,0.4-15.2,0.7-22.8,1
		c-7.5,0.3-15.3-0.1-22.8,0.7C99,163.8,98.8,159.2,101.5,159.5z"
            />
            <path
              style={st3}
              d="M91.9,125.4c5.8,15.2,8.2,31.9,10.4,47.9c2.3,16.7,3.7,33.5,6.5,50c0.3,1.4-2,2.1-2.3,0.6
		c-3.1-16.2-5.1-32.5-7.4-48.8c-1.1-8.1-2.4-16.2-4.1-24.2c-1.7-8.4-4.1-16.4-6.7-24.7C87.8,124.2,91,123.5,91.9,125.4z"
            />
            <path
              style={st3}
              d="M41.1,233.4c6.4-13.3,15.3-24.7,24.1-35.9c9.9-12.6,19.7-25.4,30.1-37.6c1-1.3,2.6,0.6,1.6,1.8
		c-9.2,12.8-18.9,25.2-28.5,37.7c-8.8,11.3-17.7,22.7-24,36.1C43.4,238.3,40,236,41.1,233.4z"
            />
            <path
              style={st3}
              d="M36.6,230.6c5.7-1,11.6-1.3,17.4-1.8c6.4-0.7,12.8-1.3,19.1-1.8c12.3-1.1,24.8-2,37.3-2.3c1.7,0,1.6,2.4,0,2.6
		c-12.1,1-24.1,2-36.2,3c-6,0.6-12.1,1.1-18,1.7c-6.4,0.7-12.8,1.7-19.1,2.1C35,234.3,34.6,230.9,36.6,230.6z"
            />
            <path
              style={st3}
              d="M107.9,222.5c3-2.6,6.5-4.7,9.6-6.8c3.7-2.6,7.5-5.2,11.2-7.8c7.1-5,14.2-10.1,21.4-15
		c14.2-10.1,28.2-20.3,42.5-30.3c1.1-0.9,2.6,1.1,1.6,2c-13.6,10.5-27.5,20.6-41.3,30.8c-7.1,5.1-14.2,10.2-21.1,15.3
		c-3.4,2.4-6.8,4.8-10.2,7.2c-3.7,2.6-7.2,5.7-11.2,7.8C108.5,226.8,106.2,224.1,107.9,222.5z"
            />
            <path
              style={st3}
              d="M191.4,130c0-2,2.8-2,3.1,0c1.1,8.9,1.4,18.1,2,27.1c0.6,9.4,1.1,18.7,1.8,28.1c1.1,17.9,2.6,35.9,7.5,53
		c0.9,3.1-4,4.4-4.8,1.3c-5-17.3-6.2-35.4-7.1-53.3c-0.4-9.4-0.8-18.7-1.3-28.1C192,148.8,191.3,139.3,191.4,130z"
            />
            <path
              style={st4}
              d="M192.8,128.4c4.1-0.9,8.2-1.1,12.3-1.7c4.5-0.6,9.5-1.7,14.2-1.3c1.6,0.1,1.8,2.3,0.4,2.8
		c-4,1.4-8.8,1.7-12.9,2.3c-4.4,0.7-8.9,1.6-13.3,1.8C191,132.7,190.6,128.8,192.8,128.4z"
            />
            <path
              style={st4}
              d="M210.3,142c3.8,0.1,9.5,0.4,11.3-3.1c1.8-3.7-1.3-8.5-3.4-11.6c-0.9-1.3,1.3-2.7,2.4-1.6
		c4,3.5,7.2,9.9,5.1,14.7c-2.3,5.4-10.4,5.8-16,5C207.3,145.1,207.9,142,210.3,142z"
            />
            <path
              style={st3}
              d="M76.1,122.9c6.8,0.4,13.6,1,20.6,1.1c3.4,0.1,6.8,0,10.4,0c3.1,0,6.5-0.6,9.5,0.6c1.1,0.4,1.6,2.1,0.4,2.7
		c-2.7,1.4-5.8,1.3-8.8,1.6c-3.4,0.3-6.8,0.4-10.4,0.4c-7.2,0.1-14.5,0.1-21.7-0.6C72.4,128.4,72.4,122.6,76.1,122.9z"
            />
          </g>
          <g id="Pedals">
            <path
              style={st3}
              d="M102.9,228.9c0.4-1.1,1.1-2.1,2.3-2.8c4-2.4,9.9-2.4,12.8,1.8c3,4.5,1.6,10.8-3.3,13.3c-2,1-4.8,2-7.1,1.6
		c-2.7-0.6-4.4-2.4-5.8-4.5C99.7,234.9,100.7,231.5,102.9,228.9z"
            />
            <path
              style={st3}
              d="M92.9,209.2c3.7,0.6,7.2,1.4,10.6,3c1.4,0.6,0.6,3-0.9,2.6c-3.4-1-6.8-2-10.4-2.3
		C90.2,212.3,90.7,208.9,92.9,209.2z"
            />
            <path
              style={st3}
              d="M103.5,212.5c3.1,5.7,5.5,11.8,7.9,17.7c0.7,1.8-2.3,2.8-3,1c-2.3-6-5-11.6-7.2-17.6
		C100.8,212.2,102.8,211.2,103.5,212.5z"
            />
            <path
              style={st3}
              d="M114.7,238.8c0.7,2.1,1,4.4,1.3,6.7c0.3,1.8-0.1,4.4,0.4,6.4c2.6-0.1,5.1-0.3,7.8-1c3-0.7,4.3,3.8,1.3,4.5
		c-3.5,0.9-7.2,1.4-10.8,0.6c-0.9-0.1-1.6-1.1-1.6-2c0.1-2.1-0.4-4.4-0.4-6.4c-0.1-2.7-0.6-5.2-1-7.9
		C111.4,237.7,114.1,236.8,114.7,238.8z"
            />
          </g>
          <g id="Biker">
            <path
              style={st0}
              d="M212.2,128.8c1.4,2,1.6,5-0.1,6.7c-1.3,1.4-3.4,1.7-5.2,1.4s-3.5-1.1-5.2-2c-1-5.1-2.4-10.1-4-15
		c0.9-1.8,3.7-1.8,5.2-0.4c1.6,1.3,2.4,3.3,4,4.8C208.4,126,210.8,127,212.2,128.8z"
            />
            <path
              style={st3}
              d="M193.2,122.9c3.4,0,7.7-0.9,10.4-3c1.7-1.4-0.1-1.3-1.4-2.4c-1.1-1-1.8-2.3-2.4-3.5c-4-7.7-7.8-15.6-10.4-24
		c-0.7-2.3-1.3-4.5-2-6.9c-1.7-6.2-3.3-12.5-5-18.7c-1.3-4.7-3.5-8.9-4.8-13.5c-1-3.7-1.8-8.2-5.4-10.5c-1.7-1.1-3.7-1.7-5.7-2.3
		c-2.8-0.7-4.8-1-7.2,0.7c-2,1.4-3.7,3.5-4,6.1c-0.3,2.8,1.1,5.4,2.6,7.8C170.9,75.5,182.7,98.9,193.2,122.9z"
            />
            <path
              style={st5}
              d="M198.3,126.9c1.3,1.8,0.6,4.5,1.6,6.7c0.7,1.6,2.3,2.4,3.7,3.1c1.8,0.8,4,1.3,6,0.7s3.7-2.4,3.8-4.5
		c0-1.7-1-3.3-2-4.5c-1.4-1.7-2.8-3.4-4.4-5C204.7,125.6,201.6,127,198.3,126.9z M209.8,131.4c-0.4-0.4,0.3-1.1,0.7-0.7
		c0.6,0.6,1,1.3,1.3,2.1c0.1,0.3-0.1,0.6-0.3,0.6c-0.3,0.1-0.4-0.1-0.6-0.4C210.6,132.4,210.2,131.8,209.8,131.4z M208.8,132
		c0.1,0.7,0.6,1.4,1,2s-0.4,1-0.8,0.6c-0.4-0.7-0.9-1.4-1-2.3C207.7,131.5,208.6,131.4,208.8,132z M206.4,132.8
		c0.4,0.6,0.9,1.1,1.1,1.8c0.3,0.6-0.6,1.1-0.9,0.6c-0.3-0.6-0.6-1.1-1-1.6C205.2,133.1,206,132.4,206.4,132.8z"
            />
            <path
              style={st3}
              d="M182,64.3c-6.9,3.3-9.1,5.5-14.6,10.9c-3.8,3.8-7.4,8.1-11.2,11.9c-5.7,5.4-12.2,9.5-18.7,13.7
		c-2.1,1.4-4.4,2.8-6.8,3.3c-1.7,0.4-3.5,0.3-5.4,0c-16.4-2-30.6-11.8-46.9-9.4c1.8-20.6,24.2-32.2,40.4-43.1c2.7-1.8,5-3.5,7.8-5
		c3-1.4,6.1-2.7,9.2-3.8c6.1-2.3,12.5-4.1,18.9-5.5c8.4-1.7,16.6-1.1,21.8,6.5C180.3,49.6,182.3,57.4,182,64.3z"
            />
            <path
              style={st6}
              d="M108.4,209.3c-3.1-1.7-5.4-4.7-6.4-8.1c10.5-7.8,21.3-17,28.4-28.1c0.7-1.1,1.6-2.6,1.3-4
		c-0.1-1.4-1.1-2.4-2.1-3.4c-1.4-1.6-9.2-7.1-8.6-8.8c0.4-1.4,6-3.4,7.4-4.1c3-1.6,5-2.3,8.4-2.7c0.4,0,0.9-0.1,1.3,0
		c0.3,0.1,0.6,0.4,0.9,0.6c3.1,3.1,5.4,7.1,6.7,11.3c0.6,2,1.1,4,1,6.1c-0.4,6.8-7.1,10.6-11.8,14.6c-6.1,5.1-11.8,10.5-17.6,16
		C113.8,202.1,110.4,205.4,108.4,209.3z"
            />
            <path
              style={st7}
              d="M88.5,88.2c-2.8-1.3-6.2-0.1-7.8,2.6c-6.9,12.5-6.4,28.9,1.7,40.7c4.4,6.4,10.6,11.2,16.9,15.9
		c6.7,5.1,13.3,10.2,20,15.3c5-4.7,10.5-8.6,16.4-11.6c0.7-0.4,1.6-0.9,2-1.6c0.8-1.3,0.1-3.1-0.6-4.4c-3.5-6.8-7.8-13.5-10.4-20.7
		c-2.6-7.2-3.4-15.6-0.1-22.5C113.6,98.2,100.9,93.7,88.5,88.2z"
            />
            <path
              style={st2}
              d="M114.1,219.1c-0.1,1-0.9,1.7-3,1.6c-5.8-0.6-11.2-4.5-13.3-9.9c-0.4-1-0.7-1.8-1.1-2.7c-1-1.6-2.7-3-2.6-5
		c0.3-2,2.4-3,4.3-3.5c1.7-0.6,2.8-1.3,4,0.4c2.3,3,4.4,6.1,6.2,9.4c1.1,2.1,2.1,4.4,3.8,6.2C113.4,216.6,114.2,218,114.1,219.1z"
            />
            <path
              style={st6}
              d="M208.1,138.8c1.4,2,1.6,5-0.1,6.7c-1.3,1.4-3.4,1.7-5.2,1.4s-3.5-1.1-5.2-2c-1-5.1-2.4-10.1-4-15
		c0.9-1.8,3.7-1.8,5.2-0.4c1.6,1.4,2.4,3.3,4,4.8C204.3,136.1,206.7,136.9,208.1,138.8z"
            />
            <path
              style={st6}
              d="M213.8,28.1c1.3,3.1-0.1,6.5-1.7,9.5c-1.6,3-3.3,5.8-5.8,7.9c-1.7,1.6-3.8,2.6-5.8,3.5
		c-2.6,1.3-5.5,2.3-8.1,3.7c-2.3,1.3-4,2.3-6.8,1.8c-0.7-0.1-1.3-0.3-2-0.7c-1.4-0.8-2-2.6-2.4-4.1c-0.7-2.6-2-5-1.7-7.7
		c0.3-2.6,2.4-4.5,3.3-6.8c0.7-2.1,0.7-4.3,2-6.2c0.7-1.1,1.7-2,2.7-2.8c5.1-4.1,12.3-4.7,18.7-3.3
		C209.2,23.7,212.5,25.1,213.8,28.1z"
            />
            <path
              style={st2}
              d="M180,39.5c-0.7-0.9-1.4-1.8-1.7-2.8c-0.7-2.1-0.6-4.5-0.1-6.8c0.4-2.7,1-8.5,3-10.5s7.1-1.6,9.5-0.8
		c2.8,0.7,5.5,2.8,6.5,5.7c-2.8,0.1-5.7,1.4-7.9,3.3c-2.1,1.7-4.4,3.8-5,6.5c-0.6,2.4,0,4.7-1.1,6.9C181.8,41,180.9,40.2,180,39.5z"
            />
            <path
              style={st8}
              d="M181.4,12.8c0.3,2.4,0,4.8-0.6,7.1c6.7,2.3,13.2,5,19.4,8.2c0.1-0.3,0.1-0.7,0.3-1c-2.4-0.4-4.1-2.3-5.7-4.1
		c-2.1-2.3-4.4-4.4-6.8-6.2C186,15.2,183.8,13.6,181.4,12.8z"
            />
            <path
              style={st8}
              d="M176,10.5c-0.9-0.7-1.7-1.7-1.3-2.7c0.3-0.9,1.4-1.3,2.3-1.4c2.3-0.4,4.5-0.4,6.8-0.6c1.7-0.1,3.5-0.4,5.2-0.7
		c11.3-1.1,22.8,4,29.4,12.9c0.6,0.9,1.1,1.6,1.6,2.4c1.1,2.6,1,5.2,0.4,7.9s-1.6,3.8-4.4,3.4c-2.4-0.3-4.4,0.3-6.8,0
		c-2.7-0.3-5.5-1.3-7.9-2.7c-4.1-1.6-7.5-6.5-10.9-9.4c-1.8-1.6-3.8-2.6-6-3.7c-2.7-1.4-5.1-3.4-7.7-5.1
		C176.5,10.9,176.2,10.8,176,10.5z"
            />
            <path
              style={st8}
              d="M221.8,32.5c-0.4-0.9-1-1.8-2-2.3c-2.7,1.3-6.1,1.7-9.2,1c-0.9-0.1-1.7-0.4-2.6-0.9c-1-0.6-1.7-1.4-2.4-2.3
		c-0.1-0.1-0.3-0.3-0.4-0.3c-0.3-0.1-0.6,0-0.7,0.3c-0.7,0.7-0.6,1.7,0,2.6s1.4,1.4,2.3,2c2,1.3,3.8,2.7,5.8,4c2.8,2,5.8,4,9.2,4.7
		c0.4,0.1,0.9,0.1,1.4,0.1c0.7-0.1,1.3-0.8,1.4-1.6c0.1-0.7-0.1-1.4-0.3-2.1C223.5,36,222.7,34.2,221.8,32.5z"
            />
            <path
              style={st9}
              d="M187.1,43.1c1.6-2.6,3-5.1,4.7-7.5c2-2.7,3.7-5.5,4.5-8.8c0.3-0.9,1.4-0.4,1.3,0.4c-0.7,4.4-3.7,7.8-6.2,11.2
		c-1.7,2.3-2.6,4.7-3.3,7.4c-0.6,2.1-1.7,8.4,1,9.5c1.1,0.6,0.1,2.3-1,1.7c-1.8-0.8-2.3-2.6-2.4-4.4
		C185.4,49.7,185.7,45.5,187.1,43.1z"
            />
            <path
              style={st9}
              d="M182.4,19.4c0-1.1,1.8-1.1,1.7,0c-0.7,7.5,2.7,15,4.5,22.1c0.1,0.7-0.9,1-1.1,0.3
		C185.2,34.7,182.1,27.1,182.4,19.4z"
            />
            <path
              style={st8}
              d="M62.6,64.5c-1.6-2.3-3.3-4.8-3-7.5c0.3-3.3,3-5.7,5.5-7.7c18.3-14.5,37.9-27.2,58.4-38
		c1.6-0.9,3.3-1.7,5.1-1.6c2.8,0.3,4.7,3,6.2,5.5c4.5,7.5,9.1,15,13.6,22.5c-13.9,15.9-30.2,29.5-48.2,40.4c-3.4,2-6.9,4-10.8,4.5
		c-5.7,0.9-11.5-1.6-15.9-5.2C69.3,74,65.9,69.2,62.6,64.5z"
            />
            <path
              style={st8}
              d="M151.9,37.3c-2.1,0.6-3,3.5-5.1,4c-2,0.4-3.7-1.3-5-2.8c-8.1-10.1-15.7-20.6-22.8-31.3c3.4-3.4,7.9-6,12.6-6.9
		c7.7,10.8,15,21.7,22,33c0.7,1.1,1.3,2.8,0.3,3.7C153.3,37.1,152.6,37.1,151.9,37.3z"
            />
            <path
              style={st10}
              d="M123.1,8.2c5.2,12.6,13.5,23.2,23.4,32.5c0.7,0.6-0.3,1.6-1,1c-10.8-8.5-19.1-20-24.5-32.6
		C120.4,7.7,122.6,6.8,123.1,8.2z"
            />
            <path
              style={st11}
              d="M149.7,38.1c10.4-1.1,21,0.4,28.5,8.2c6.2,6.4,9.6,18.7,1.8,25.4c-2.8,2.4-6.9-1.7-4.1-4.1
		c6.4-5.2,1.3-14.9-3.5-19.3c-6-5.5-15.2-6.7-22.8-6.4C147.1,42.1,147.2,38.4,149.7,38.1z"
            />
            <path
              style={st11}
              d="M106.7,79.2c5.7,8.8,14.5,13.3,25,13.5c10.5,0,22.5-5,29.2-13.2c1.4-1.7,4.1,0.4,3,2.3
		c-6.7,10.3-20.4,15.7-32.2,16.4c-11.6,0.6-24.8-5.2-30.5-15.7C99.3,78.8,104.6,75.7,106.7,79.2z"
            />
            <path
              style={st3}
              d="M189.2,132.8c4.3,0,8.5-1.4,11.8-4.1c-13.3-26.4-22.8-54.4-32.2-82.3c-3.5-0.1-7.2-0.3-10.5,1
		c-3.4,1.1-6.4,4-6.7,7.5c-0.3,2.8,1.1,5.4,2.6,7.8C167,85.5,178.6,108.9,189.2,132.8z"
            />
            <path
              style={st9}
              d="M194.6,137.1c1.3,1.8,0.6,4.5,1.6,6.7c0.7,1.6,2.3,2.4,3.7,3.1c1.8,0.9,4,1.3,6,0.7s3.7-2.4,3.8-4.5
		c0-1.7-1-3.3-2-4.5c-1.4-1.7-2.8-3.4-4.4-5C201,135.8,197.7,137.2,194.6,137.1z M206.1,141.6c-0.4-0.4,0.3-1.1,0.7-0.7
		c0.6,0.6,1,1.3,1.3,2.1c0.1,0.3-0.1,0.6-0.3,0.6c-0.3,0.1-0.4-0.1-0.6-0.4C206.9,142.6,206.5,142,206.1,141.6z M205.1,142.2
		c0.1,0.7,0.6,1.4,1,2s-0.4,1-0.8,0.6c-0.4-0.7-0.9-1.4-1-2.3C204,141.7,205,141.5,205.1,142.2z M202.5,143c0.4,0.6,0.9,1.1,1.1,1.8
		c0.3,0.6-0.6,1.1-0.9,0.6c-0.3-0.6-0.6-1.1-1-1.6C201.6,143.3,202.1,142.6,202.5,143z"
            />
            <path
              style={st12}
              d="M207.2,20c4.5,2.1,5.4,7.5,5,12c-0.1,1-1.6,1-1.6,0c0.3-4.3,0.4-9.1-3.8-11.3C206.2,20.5,206.7,19.8,207.2,20
		z"
            />
            <path
              style={st12}
              d="M214.7,31.6c3.4-3,2.4-8.4,0.1-11.6c-0.3-0.4,0.4-1,0.7-0.6c3.3,4,3.7,9.2,0.6,13.3
		C215.3,33.9,213.8,32.5,214.7,31.6z"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default Mountainbike;
