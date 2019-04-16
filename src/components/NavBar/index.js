import React from 'react';
import { Link } from '@reach/router';
import logo from './media/NXT_Logo_light.svg';

// isCurrent - true if the location.pathname is exactly the same as the anchor’s href.
export const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: 'active nav-link' }
    : { className: 'nav-link' };
};

// `getProps` Calls up to you to get props for the underlying anchor element.
// Useful for styling the anchor as active.
const ExactNavLink = props => <Link getProps={isActive} {...props} />;

class NavBar extends React.Component {
  buttonRef = React.createRef();
  state = {
    isHidden: true,
  };

  toggleHidden = event => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
    // blur the button (otherwise it stays pressed)
    this.buttonRef.current.blur();
  };

  render() {
    // hide and show classes
    let buttonClasses = 'navbar-toggler';
    if (this.state.isHidden) {
      buttonClasses = 'navbar-toggler collapsed';
    }
    let dropDown = 'navbar-collapse collapse show';
    if (this.state.isHidden) {
      dropDown = 'navbar-collapse collapse';
    }

    return (
      <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-white">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="d-inline-block align-middle mr-auto"
              src={logo}
              width="115"
              height="53"
              alt="NEXT by Pacific Life"
            />
          </Link>

          <button
            className={buttonClasses}
            type="button"
            aria-label="Toggle navigation"
            onClick={this.toggleHidden}
            ref={this.buttonRef} // get a reference to the button
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={dropDown}>
            <ExactNavLink to="/" onClick={this.toggleHidden}>
              Home
            </ExactNavLink>

            <ExactNavLink to="/about" onClick={this.toggleHidden}>
              About
            </ExactNavLink>

            <ExactNavLink to="/contact" onClick={this.toggleHidden}>
              Contact
            </ExactNavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
