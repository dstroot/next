import React from 'react';
import { Link } from '@reach/router';
import logo from './media/NXT_logo_footer_dark.svg';

const FooterCustom = props => {
  const year = new Date();
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col p-3">
          <img src={logo} className="pr-3 pb-4" alt="Logo" />
          <span className="nxt_footer">
            By using this website you accept our{' '}
            <Link to="/terms">
              <span className="text-accent">Terms of Use</span>
            </Link>
            ,{' '}
            <Link to="/social">
              <span className="text-accent">Social Media Guidelines</span>
            </Link>
            , and{' '}
            <Link to="/privacy">
              <span className="text-accent">Privacy Policy</span>
            </Link>
          </span>
          <small>
            <div className="nxt_footer">
              {props.content}
              <p>
                © {year.getFullYear()} Pacific Life Insurance Company, Newport
                Beach, CA.
              </p>
            </div>
          </small>
        </div>
      </div>
    </div>
  );
};

export default FooterCustom;
