import React from 'react';
// React-gsap
import { Tween, Timeline } from 'react-gsap';

// SVG styles
const st0 = {
  fill: '#33233',
};

const st1 = {
  fill: '#3B3B40',
};

const st2 = {
  fill: '#90959A',
};

const st3 = {
  fill: '#D1AC9D',
};

const st4 = {
  opacity: '0.35',
  fill: '#97AECC',
  enableBackground: 'new',
};

const st5 = {
  fill: '#525A62',
};

const st6 = {
  fill: '#46464A',
};

const st7 = {
  fill: '#03A678',
};

const st8 = {
  fill: '#3EC29D',
};

const st9 = {
  fill: '#768994',
};

const st10 = {
  fill: '#D6E1E4',
};

const st11 = {
  fill: '#179572',
};

const st12 = {
  fill: '#3C444C',
};
const st13 = {
  fill: '#F2D292',
};
const st14 = {
  fill: '#818181',
};
const st15 = {
  fill: '#1C1C1C',
};

const st16 = {
  opacity: '0.13',
  fill: '#070707',
  fillOpacity: '0.32',
  enableBackground: 'new',
};

// Position SVG

const mopedBody = {
  width: '20vw',
  minWidth: '175px',
  position: 'absolute',
  bottom: '0',
  left: '-20%',
  zIndex: '99',
};

// Find Device width
const deviceWidth = window.innerWidth;

const Moped = () => {
  return (
    <Tween
      from={{ x: '-200px' }}
      to={{ x: deviceWidth + 300, repeat: '10', ease: 'Linear.easeNone' }}
      duration={10}
    >
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns={{ xlink: 'http://www.w3.org/1999/xlink' }}
        x="0px"
        y="0px"
        viewBox="0 0 215 183"
        style={mopedBody}
      >
        <h1>I'm a Moped</h1>
        <g>
          <Tween
            directionalRotation={'360_ccw'}
            transformOrigin={'50% 50%'}
            repeat={500}
            ease={'Linear.easeNone'}
          >
            <g id="Back_Tire">
              <path
                class="st0"
                d="M74.7,145.4c-0.7-2.2-1.4-4.3-2.8-6.1c-1.5-2-3.2-4-5.4-5.3c-1.7-1-3.6-1.6-5.5-2.1
				c-4.4-1.2-8.8-1.6-13.3-0.4c-4.3,1.2-9.3,6.6-11.9,10.7c-3.1,4.9-3.7,10.5-1.7,16c1.1,3,2.9,5.8,5.1,8c5.9,6,16,7.7,23.7,4.5
				c3.9-1.6,7.2-4.4,9.5-7.9C75.7,157.5,76.6,151.1,74.7,145.4z M65.9,157.3c-0.2,0.4-0.4,0.7-0.6,1.1c-0.7,1.4-1.5,2.8-2.7,3.8
				c-1.5,1.4-3.1,1.6-5,1.8c-1.8,0.1-3.5,0.1-5.3-0.1c-0.5,0-1.1-0.1-1.6-0.2c-0.6-0.2-1.1-0.4-1.7-0.7c-1.8-0.8-3.7-1.9-4.8-3.5
				c-1.2-1.7-1.9-3.9-2.2-5.9c-0.3-1.7-0.3-3.4,0.2-5.1c0.6-2,2-3.7,3.7-5c1.6-1.3,3.8-2.7,5.9-3.2c2.4-0.5,4.7-0.5,7,0.2
				c1.1,0.3,2.3,0.8,3.3,1.5c3.1,2,5.7,6.8,5.4,10.6C67.3,154.2,66.7,155.8,65.9,157.3z"
              />
              <path
                class="st0"
                d="M58.6,147c-1.9-1.4-3.8-2-6.1-1.2c-1.9,0.7-3.9,2.5-4.3,4.6c-0.2,1.1-0.2,2.3,0.1,3.3c0.8,2.8,4.6,4.6,7.4,4
				c1-0.2,1.9-0.8,2.8-1.3c1.9-1.2,2-2.8,2.3-4.9C61.2,149.4,60.2,148.2,58.6,147z"
              />
            </g>

            <g id="Front_Tire">
              <path
                class="st0"
                d="M192.4,163.3c1.2-1.9,2.4-3.8,3-6c0.6-2.5,1-5,0.7-7.5c-0.3-2-1-3.8-1.8-5.6c-1.9-4.2-4.3-7.8-8.1-10.5
				c-3.7-2.6-11-3-15.8-2.5c-5.7,0.7-10.5,3.8-13.4,8.8c-1.6,2.8-2.6,5.9-3,9.1c-0.9,8.4,4.2,17.2,11.6,21.2c3.7,2,8,2.8,12.2,2.3
				C183.7,171.9,189.2,168.5,192.4,163.3z M177.7,164.1c-0.4,0.1-0.8,0.2-1.2,0.2c-1.5,0.3-3.1,0.6-4.7,0.4c-2-0.3-3.2-1.3-4.5-2.8
				c-1.2-1.3-2.3-2.7-3.3-4.2c-0.3-0.4-0.6-0.9-0.8-1.4c-0.2-0.5-0.4-1.1-0.5-1.7c-0.5-1.9-0.9-4.1-0.4-6c0.6-2,1.8-3.9,3.2-5.5
				c1.1-1.3,2.4-2.4,4-3.1c1.9-0.8,4.1-0.8,6.2-0.3c2,0.5,4.5,1.2,6.2,2.5c1.9,1.5,3.4,3.3,4.3,5.6c0.5,1.1,0.8,2.3,1,3.5
				c0.4,3.7-1.7,8.7-4.7,10.9C180.9,163.2,179.3,163.7,177.7,164.1z"
              />
              <path
                class="st0"
                d="M181,151.9c-0.1-2.3-0.8-4.2-3-5.4c-1.7-1-4.4-1.5-6.3-0.5c-1,0.5-1.9,1.3-2.5,2.2c-1.7,2.4-0.6,6.5,1.6,8.2
				c0.8,0.6,1.8,1,2.8,1.3c2.2,0.7,3.4-0.2,5.3-1.3C180.8,155.4,181.1,153.9,181,151.9z"
              />
              />
            </g>
          </Tween>
          <g id="Driver">
            <path
              style={st1}
              d="M138.4,97.1c-0.7-0.7-1.7-1.1-2.6-1.4c-6.8-2.4-15-1.4-20.5-5.7c-1.8-1.4,4.4-4.2,5.5-4.5
			c4.5-1.2,10.7,0.1,15.3,0.5c4.1,0.4,13.6,2.8,15.9,6.3c1.2,2,0.5,4.5-0.4,6.7c-3.1,7.8-6.7,15.4-10.3,23c-1.1,2.2-1.8,5.3,0.4,6.7
			c0.8,0.6,1.9,0.6,2.6,1.2c0.7,0.6,0.8,2-0.1,2.1c-0.2,0-0.6-0.1-0.8-0.1c-2.7-1-5.5-2-8.2-2.9c-0.5-0.1-1-0.3-1.2-0.8
			c-0.2-0.4-0.1-0.9,0-1.3c1.8-7.6,3.6-15.2,5.5-22.7C139.8,101.7,140.2,98.8,138.4,97.1z"
            />
            <path
              style={st2}
              d="M96.4,29.1c0.8-0.6,1.9-0.2,3.2,0.1c1.6,0.3,3,1,4.4,1.7c2.7,1.4,5.3,3.4,7.6,5.3c3.6,3,7.3,6.1,9.4,10
			c1.3,2.4,1.9,5.2,2.5,7.9c2.4,10.8,4.7,21.5,7,32.3c-9.9-0.7-20.1,2.6-27.2,9c-1.3,1.1-2.6,2.4-4.4,2.3c-3.5,0-5.4-6.2-6.3-8.6
			c-1.4-3.7-2.1-7.8-2.4-11.8c-0.5-6.5,0.1-13.1,0.2-19.6c0-2.8,0-5.5,0.2-8.1c0.2-3.4,1-6.8,1.9-10.1c0.5-1.7,1-3.3,1.6-5
			c0.5-1.4,0.8-3.6,1.8-4.8C96.1,29.5,96.3,29.3,96.4,29.1z"
            />
            <path
              style={st3}
              d="M100.2,24.7c0.2,1.2,0.5,2.4,1.3,3.3s2,1.3,3.3,1.7c1.7,0.4,3.3,0.9,5,0.7c3.8-0.3,6.9-3.2,8.1-6.5
			s0.7-6.9-0.5-10.2c-0.8-2.3-2.1-4.7-4.4-5.8c-1.2-0.6-2.6-0.8-3.9-0.8c-1.7,0-3.3,0.2-4.7,1.1c-1.2,0.9-1.9,2.2-2.6,3.5
			c-1,1.9-1.9,3.9-2.3,5.8C99.3,20,99.8,22.3,100.2,24.7z"
            />
            <path
              style={st3}
              d="M150.3,60.2c0.4,0.7,0.7,1.3,0.5,2c-0.4,0.9-1.8,1.1-2.7,0.7c-1-0.4-1.7-1.2-2.5-1.8
			c-2.5-1.7-5.8-1.1-8.8-0.7c-4.8,0.8-9.7,1.2-14.6,0.7c-4.8-0.4-9.7-1.9-13.5-4.5c-4.3-2.9-7.3-7-9.8-11.4
			c-0.4-0.7-0.7-1.3-0.8-2.1c0-0.8,0.4-1.5,1.1-1.9c1-0.3,1.9,0.1,2.7,0.7c2.5,1.5,11,8.7,13.5,10.2c7.8,4.7,9.8,3.9,19,5.2
			c2.6,0.4,5.4,0.4,8.1,0.2c2.3-0.2,4.9-0.4,6.6,1C149.5,59,149.9,59.5,150.3,60.2z"
            />
            <path
              style={st1}
              d="M124.1,27.2c0-0.6-0.2-1.1-0.7-1.3c-0.2-0.1-0.6-0.1-0.8-0.1c-2.6,0-5.4-0.1-8-0.1c-2.4,0-4.8-0.1-7.2-0.7
			c-1.8-0.4-3.6-1.3-5.1-2.6c0-1.4,0-3,1.1-4c1.3-1.4,3.3-2.1,5.3-2.4c3.9-0.8,8.1-0.8,12.2-0.7c1.1,0,1.7-0.9,2-1.9
			c0.4-1.1,0.5-2.3,0.4-3c-0.2-1.8-1.2-3.3-2.3-4.7c-3.5-4.1-9.4-6.2-15-5.6c-5,0.6-11.5,3.4-13.1,8.1c-0.5,1.2-0.5,2.4-0.6,3.7
			c-0.1,3.5,0.2,7.3,1.4,10.6c0.8,2,1.4,3.4,3.1,4.2c0.7,1.9,3,2.8,4.9,3.3c5.6,1.3,11.3,1.9,17.1,1.5c1.3-0.1,2.5-0.2,3.7-0.9
			C123.4,29.8,124.2,28.5,124.1,27.2z"
            />
            <path
              style={st4}
              d="M102.9,21.2c-0.6-1.1-0.1-2.4,0.8-3.3c1-0.9,2.3-1.4,3.7-1.8c2.6-0.7,5.5-1,8.2-1.1c2.1-0.1,5.8-0.8,7,1.4
			c0.4,0.7,0.5,1.3,0.6,2c0.5,2.2,0.4,5.5-1.9,6.8c-1.1,0.7-2.4,0.7-3.7,0.7c-4.1-0.1-8.1-0.8-11.8-2.1c-1.4-0.4-3-1.1-3.7-2.3
			C101.4,20.5,101.3,21.4,102.9,21.2z"
            />
            <path
              style={st5}
              d="M96.7,37.6c2.1-0.8,4.7-0.4,6.7,0.7c1.7,1,2.9,2.4,4.1,3.7c2.6,3,5.6,5.5,8.7,8.1c1.9,1.7,3.8,3.3,6.3,4.1
			c1.7,0.6,3.3,0.6,5.1,0.7c5.7,0.2,11.3,0.4,17.1,0.7c-1.3,1.4-2.1,3.2-2.5,5.1c-7,0.1-13,0.7-20.1,0.8c-2,0-5-0.3-7-0.8
			c-2-0.4-3.9-1.4-5.6-2.5c-4.7-3.1-8.1-7.4-11.6-11.6c-1.4-1.8-3-3.6-3.2-5.8c-0.1-0.8,0-1.8,0.6-2.3
			C95.7,38.1,96.2,37.8,96.7,37.6z"
            />
            <path
              style={st5}
              d="M124.6,63.1c-5,1.8-10.1,2.6-15.5,3.2c-4.8,0.4-10.7,1.1-15.4-0.2c-0.5-0.1-0.7,0.5-0.2,0.7
			c4.7,1.8,10.6,1.1,15.5,0.8c5.1-0.3,10.3-1.3,15.2-2.9h0.1c0.2-0.1,0.4-0.1,0.6-0.2C125.9,64,125.5,62.7,124.6,63.1z"
            />
            <path
              style={st5}
              d="M125.9,68.8c-10.1,4.3-20.2,4.6-31,3.5c-0.4,0-0.5,0.5-0.1,0.7c10.3,2.4,22.3,1.5,31.8-3.1
			C127.3,69.4,126.7,68.4,125.9,68.8z"
            />
            <path
              style={st6}
              d="M96.5,97c12.9,4.1,27.1-0.3,40.6,1.5c-6.7,11.2-13.3,22.6-19.9,33.8c-0.5,0.9-1,2.2-0.1,2.9
			c0.5,0.3,1.1,0.3,1.7,0.3c4.8-0.2,9.7-0.4,14.4-0.6c-1-2.5-4.3-4.2-7.2-3.5c7.5-8.8,14.2-18.2,20.1-28.1c1.4-2.5,3-5.5,1.7-8.1
			c-0.6-1.2-1.7-2.2-2.9-3.1c-6.1-4.4-14.3-6.2-21.8-4.7c0-0.6-0.6-0.3-1.1-0.4c-4.2-0.8-8.6,0.1-12.5,1.7c-3.9,1.7-7.4,4-10.9,6.4
			C97.1,95.7,97.3,95.5,96.5,97z"
            />
          </g>
          <g id="Moped_Body">
            <path
              style={st7}
              d="M118.1,108c0-3.1-3-4.1-5.3-4.1c-8.5,0-17,0-25.4,0.1c-5.8,0-12.1,0.1-17.1,4.3c-5.4,4.4-8.7,13.3-8.1,22
			c0.6,8.7,5.1,16.6,11,19.3c3,1.4,6.2,1.5,9.3,1.7c19.8,0.6,39.6-0.2,59.5-2.2c2.1-0.2,4.4-0.4,6.6-1.2
			c9.2-3.4,15.3-16.6,16.6-29.8s-1.2-26.5-4.1-39.3c-1.3-5.9-3.5-12.8-7.8-13.5c3.5,11.1,6.1,23.2,5.4,35.3
			c-0.5,7.7-2.3,15.3-5.3,21.9c-1.1,2.3-2.3,4.5-4.1,5.9c-2.3,1.9-4.9,2-7.5,2.1c-8.4,0.3-16.8,0.3-25.2,0
			c-1.8-6.2-1.6-13.4,0.5-19.4C117.8,110.1,118.3,109.1,118.1,108z"
            />
            <path
              style={st8}
              d="M165.9,59c-4.3,0.6-8.4,2.5-11.7,5.7c0.4,0.7,0.5,1.3,0.4,2.1c0.4,0.4,0.6,1,0.7,1.5c3.2,8.9,6.6,17.8,8,27.2
			c1.6,9.5,1.1,19.5-2.7,28.1c-2.3,5.1-5.7,9.5-9.7,13c-3.2,2.9-7.2,6.3-6.3,10.7c10.4,1.8,19.8-7.7,24.6-18.1
			C178.9,107.4,175.1,81,165.9,59z"
            />
            <path
              style={st7}
              d="M162.6,125.2c-5.5,7.9-11.1,15.9-16.6,23.7c11-0.3,21.8-1.2,32.7-2.5c6.2-0.8,12.9-1.9,17.3-6.9
			c3.9-4.4,5.4-11,4.7-17.2c-0.6-5.9-3.3-11.9-8.2-14.1c-3.2-1.4-6.8-1-10.1,0c-4.7,1.4-8.8,4.2-12.4,7.8
			C167.1,118.8,164.8,121.9,162.6,125.2z"
            />
            <path
              style={st9}
              d="M171.9,55.6c2,5.8,0.6,13-3.5,17.4c-1.1,1.2-2.4,2.2-3.9,2.4c-2.4,0.4-4.8-1.2-6.6-3.1
			c-2.4-2.5-4.4-5.6-5.1-9.2c-1-4.8,1-10.5,4.8-13.1c3.8-2.6,9.4-2,12.4,1.8C170.7,52.9,171.4,54.2,171.9,55.6z"
            />
            <path
              style={st10}
              d="M157.7,65.9c0.7,1.1,1.7,2.1,2.6,3c1.3,1.2,2.9,2.3,4.5,2.5c2.6,0.4,5.3-1.3,6.7-3.6c1.6-2.4,2-5.3,2.4-8.3
			c0.1-1.7,0.2-3.3-0.4-4.8c-0.4-1.1-1.1-2.1-1.9-2.9c-3.5-3.4-9.3-3.4-12.8,0C155.5,55.2,154.9,61.7,157.7,65.9z"
            />
            <path
              style={st9}
              d="M142.3,63.7c0.5,0.4,1.3,0.3,2,0.2c4.4-0.9,8.6-3.3,11.5-6.6c0.1-0.2,0.4-0.4,0.5-0.7
			c0.2-0.7,0.1-1.4-0.5-1.9c-0.8-0.7-2-0.6-3-0.1c-3.1,1.2-5.1,4-8.1,5.5c-0.7,0.4-1.6,0.7-2.1,1.3
			C141.8,62.2,141.5,63.3,142.3,63.7z"
            />
            <path
              style={st11}
              d="M74.6,115.6c4.4,0.2,9.7-0.2,12.5,3.6c2.5,3.5,1.4,8.6,0.1,12.9c-1.2,4.2-2.6,8.6-5.5,11.7
			c-3.9,4.2-9.8,5-15.2,5.5c-10.4,1-20.8,1.7-31.2,2c-2.6,0.1-5.4,0.1-7.9-0.7c-7.8-2.4-11.7-13-9.6-21.5s9.1-14.9,16.7-17.7
			c5-1.9,10.4-2.5,15.8-1.8C58.6,110.8,66.3,115.1,74.6,115.6z"
            />
            <path
              style={st1}
              d="M32.2,105.2c-0.5-1-1-2-1.3-3.1c-1.6-5.3,0.7-12.1,3.7-14.3c3-2.2,6.3-1.2,9.4-0.2c23,7,46.4,9,69.7,5.8
			c1.3-0.2,2.7-0.3,3.9,0.9c1.6,1.5,2.1,5.2,2,8.4c-0.4,5.2-2.6,9.5-5.1,11.6s-5.4,2.5-8.2,2.9C92.1,119,78,121,63.8,122.8
			c-4.2,0.6-8.4,1.1-12.5,0.1C44.1,121.3,37.3,114.9,32.2,105.2z"
            />
            <path
              style={st12}
              d="M73.7,76.8c-2.7,3.1-6.8,4.1-10.7,4.7c-8,1.4-16.6,2.3-24.7,2.2C32,83.6,25,82.4,21.2,77.4
			c-3.3-4.3-3.8-10-3.8-15.2c0-4.5-0.2-11,4.4-13.8c1.8-1.1,3.9-1.5,6-2c8.1-1.4,16.5-0.9,24.4,1.2c9.1,2.4,22.1,5.4,25.1,15
			C78.7,67.4,77.2,73.1,73.7,76.8z"
            />
            <path
              style={st12}
              d="M26.5,62.1c6,1.8,12.2,2.5,18.4,2.9c6.6,0.3,13.1,0.4,19.6-0.5c3-0.4,5.8-1.2,8.7-2c1.2-0.3,2.4-0.5,3.5-0.9
			C73.1,52.8,60.8,50,52.1,47.8c-8-2.1-16.2-2.6-24.4-1.2c-2.1,0.3-4.2,0.9-6,2c-3.6,2.2-4.2,6.6-4.4,10.6
			C20.5,60.4,24.3,61.4,26.5,62.1z"
            />
            <path
              style={st5}
              d="M78.5,115.5c0,0.7,0,1.3,0,2c0,3.2-22.6,1.2-26.4,1.2c-7.8-0.1-17.4,1.2-25.1-0.2c-4.2-0.8-2.7-3.7-2.9-7.4
			c-0.1-3.4-0.1-6.9-0.1-10.3c0-7.2,0-14.3,0.1-21.4c3.3,0,6.3-1,9.8-1.1c3.1,0,6.2,0.4,9.4,0.4c9.7,0,19.3-0.2,29,0.1
			c2.4,0.1,4.9-0.2,6.1,1.8c1.6,2.5,0.1,9,0.1,11.9C78.5,100.2,78.5,107.8,78.5,115.5z"
            />
            <path
              style={st13}
              d="M82.1,94c0,0.3,0,0.7-0.2,1c-0.7,1.1-5.3,1-6.7,1c-2.5,0.1-5.1,0-7.6-0.1c-4.9,0-9.8-0.2-14.8-0.3
			c-8.6-0.1-19.2,0.6-27.5-0.1c-4.5-0.4-3-1.9-3.1-3.7C22,89.9,22,88.2,22,86.4c0-2.1,0-4.3,0-6.4c0-1.5-0.7-3.7,1.1-4.8
			c0.8-0.5,2-0.7,3.1-0.7c1.3,0,2.6,0.1,3.9,0.2c4.3,0.3,8.7,0.4,13,0.4c12.2,0,24.4,0.2,36.4-0.1c0.4,0,0.7,0,1.1,0.1
			c0.4,0.2,0.5,0.5,0.6,0.9c0.5,1.2,0.5,2.5,0.5,3.9c0.1,3.1,0.1,6.3,0.2,9.4C82.1,90.9,82.1,92.5,82.1,94z"
            />
            <path
              style={st14}
              d="M54.1,91.7c-1.7,0.1-3.3,0.2-5,0.3c-0.1,2.8-0.1,5.6-0.2,8.4c1.8,0,3.6-0.2,5.3-0.4
			C54.2,97.2,54.2,94.4,54.1,91.7z"
            />
            <path
              style={st5}
              d="M76.6,61.7c-9.5,2.6-19.3,3.4-29.2,3.1C42.2,64.6,37,63.9,32,63.2c-4.9-0.8-9.9-1.8-14.1-4.4
			c-0.4-0.2-0.7,0.3-0.4,0.5C25,64.4,36,65,44.9,65.7c10.7,0.8,21.6,0,32-2.9C77.6,62.6,77.3,61.5,76.6,61.7z"
            />
            <path
              style={st15}
              d="M70.5,62.4c0-0.3-0.2-0.6-0.5-0.8c-0.4-0.3-0.7-0.2-1.2-0.4c-0.2-0.1-0.5-0.1-0.6,0c-0.1,0-0.4,0-0.4,0.2
			c-0.1,0.5,0.1,1,0.2,1.4c0.2,0.9,0.2,1.8,0.1,2.6c-0.1,0.8,0.4,0.9,1,0.9c0.2,0.2,0.6,0.2,0.8,0c0.1,0,0.2,0,0.4,0
			c0.4,0,0.6-0.3,0.5-0.7C70.8,64.6,70.6,63.5,70.5,62.4z"
            />
          </g>
          <path
            id="Shadow"
            style={st16}
            d="M34.8,181.7c5,1,10.3,1.9,15.3,0.9c4.3-0.9,8.1-3.3,12.3-4.7c5.4-1.9,11.3-2.2,17.1-2.3
		c34.4-0.4,68.4,8.4,102.7,5.8c11.7-0.9,24.4-3.7,31.3-12.5c0.6-0.8,1.2-1.7,1.1-2.7c-0.1-2.3-3.3-3-5.9-3.1
		c-32.9-1.3-66,0.9-98.8-1.1c-10.9-0.7-21.6-1.8-32.5-1.3c-17.3,0.8-34.3,5.5-51.6,5.3c-4.9-0.1-9.9-0.5-14.8,0.4
		c-4.8,1-9.6,3.6-11.2,7.9C11.5,177,23.1,179.5,34.8,181.7z"
          />
        </g>
      </svg>
    </Tween>
  );
};

export default Moped;
