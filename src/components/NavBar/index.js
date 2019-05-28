import React, { useState, useRef, useEffect } from 'react';
import { Link } from '@reach/router';

// animations
import { TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

// components
import HamButton from '../HamButton';

// images
import logo from './media/NXT_Logo_light.svg';

// hooks
import useMediaQuery from '../../hooks/useMediaQuery';

// isCurrent - true if the location.pathname is exactly the same as the anchor’s href.
export const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'active nav-link' }
    : { className: 'nav-link' };
};

// getProps` Calls up to you to get props for the underlying anchor element.
// Useful for styling the anchor as active.
const ExactNavLink = props => <Link getProps={isActive} {...props} />;

const NavBar = () => {
  const small = useMediaQuery(`screen and (max-width: 575px)`);
  const [clicked, setClicked] = useState(false);

  const toggle = event => {
    setClicked(!clicked);
    window.scrollTo(0, 0);
  };

  const [animation, setAnimation] = useState(null);

  // GSAP
  let tl = new TimelineMax();

  // ScrollMagic
  let controller = useRef(null);
  controller = new ScrollMagic.Controller();

  useEffect(() => {
    setAnimation(
      // GSAP
      tl.to('.navbar', 0.5, {
        css: {
          borderBottom: '1px solid rgba(200, 200, 200, 1)',
          backgroundColor: '#ffffff',
        },
      })
    );
    setAnimation(
      // ScrollMagic
      new ScrollMagic.Scene({
        triggerElement: '#trig',
        triggerHook: 0.2,
        offset: 100,
      })
        .setTween(tl)
        // .addIndicators() // for debugging
        .addTo(controller)
    );
  }, []);

  if (small) {
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-white p-3">
          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <img
              className="d-inline-block align-middle"
              src={logo}
              width="115"
              height="53"
              alt="NEXT by Pacific Life"
            />
          </Link>

          {/* Burger menu */}
          <HamButton
            type="button"
            toggler={toggle}
            clicked={clicked}
            aria-label="Toggle navigation"
          />

          {/* <HamburgerButton
            type="button"
            aria-label="Toggle navigation"
            toggler={toggle}
            clicked={clicked}
          /> */}
        </nav>

        {clicked ? (
          <div className="overlay text-right">
            <ExactNavLink to="/" onClick={toggle}>
              Home
            </ExactNavLink>
            <ExactNavLink to="/about" onClick={toggle}>
              About
            </ExactNavLink>
            <ExactNavLink to="/contact" onClick={toggle}>
              Contact
            </ExactNavLink>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top p-3">
      {/* Brand */}
      <Link to="/" className="navbar-brand">
        <img
          className="d-inline-block align-middle"
          src={logo}
          width="115"
          height="53"
          alt="NEXT by Pacific Life"
        />
      </Link>

      {/* Links */}
      <div className="navbar-collapse collapse">
        <div className="mx-auto" />
        <ExactNavLink to="/" onClick={toggle}>
          Home
        </ExactNavLink>
        <ExactNavLink to="/about" onClick={toggle}>
          About
        </ExactNavLink>
        <ExactNavLink to="/contact" onClick={toggle}>
          Contact
        </ExactNavLink>
      </div>
    </nav>
  );
};

export default NavBar;
