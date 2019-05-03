import React, { useState } from 'react';
import { Link } from '@reach/router';

// components
import HamburgerButton from '../HamburgerButton';

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

// `getProps` Calls up to you to get props for the underlying anchor element.
// Useful for styling the anchor as active.
const ExactNavLink = props => <Link getProps={isActive} {...props} />;

const NavBar = () => {
  const small = useMediaQuery(`screen and (max-width: 575px)`);
  const [clicked, setClicked] = useState(false);

  const toggle = event => {
    setClicked(!clicked);
  };

  if (small) {
    return (
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
        <HamburgerButton
          type="button"
          aria-label="Toggle navigation"
          toggler={toggle}
          clicked={clicked}
        />

        {/* Links */}
        {clicked ? (
          <div className="navbar-collapse collapse show bg-white">
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
      </nav>
    );
  }

  return (
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
