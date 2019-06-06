import React from 'react';
import { Link } from '@reach/router';
import logo from './media/NXT_logo_footer_dark.svg';

const Footer = props => {
  const year = new Date();
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col p-3">
          <img src={logo} className="pr-3 pb-4" alt="Logo" />
          <span className="nxt_footer">
            <p>
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
            </p>
          </span>
          <small>
            <div className="nxt_footer">
              <p>
                No bank guarantee • Not a deposit • May lose value • Not
                FDIC/NCUA insured • Not insured by any federal government agency
              </p>
              <p>
                Pacific Life, its affiliates, its distributors, and respective
                representatives do not provide tax, accounting, or legal advice.
                Any taxpayer should seek advice based on the taxpayer's
                particular circumstances from an independent tax advisor or
                attorney.
              </p>
              <p>
                <i>
                  Pacific Life is a product provider. It is not a fiduciary and
                  therefore does not give advice or make recommendations
                  regarding insurance or investment products.
                </i>
              </p>
              <p>
                Pacific Life Insurance Company (Newport Beach, CA) is licensed
                to issue insurance products in all states except New York.
                Product availability and features may vary by state. Fixed
                annuity products are available through licensed third parties.
              </p>

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

export default Footer;
