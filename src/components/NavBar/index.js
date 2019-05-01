import React, { useState, useRef } from 'react';
import { Link } from '@reach/router';

// images
import logo from './media/NXT_Logo_light.svg';
import burger from './media/burgermenu.svg';

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
  const buttonRef = useRef(null);
  const [hidden, setHidden] = useState(true);

  const toggleHidden = event => {
    if (small) {
      setHidden(!hidden);
      // blur the button (otherwise it stays pressed)
      buttonRef.current.blur();
    }
  };

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
      <button
        className={hidden ? 'navbar-toggler collapsed' : 'navbar-toggler'}
        type="button"
        aria-label="Toggle navigation"
        onClick={toggleHidden}
        ref={buttonRef} // get a reference to the button
      >
        <img
          className="d-inline-block align-middle"
          src={burger}
          width="35"
          alt="Menu"
        />
      </button>
      {/* Links */}
      <div
        className={
          hidden
            ? 'navbar-collapse collapse'
            : 'navbar-collapse collapse show bg-white'
        }
      >
        <div className="mx-auto" />
        <ExactNavLink to="/" onClick={toggleHidden}>
          Home
        </ExactNavLink>
        <ExactNavLink to="/about" onClick={toggleHidden}>
          About
        </ExactNavLink>
        <ExactNavLink to="/contact" onClick={toggleHidden}>
          Contact
        </ExactNavLink>
      </div>
    </nav>
  );
};

export default NavBar;
