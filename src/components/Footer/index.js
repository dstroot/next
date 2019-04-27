import React from 'react';
import { Link } from '@reach/router';
import logo from './media/NXT_logo_footer_dark.svg';

const Footer = () => {
  const year = new Date();
  return (
    <div className="container-fluid bg-dark">
      <div className="row">
        <div className="col p-5">
          <img src={logo} className="pr-3 pb-3" alt="Logo" />
          <span className="font-weight-light text-white-50 nxt_body-xsmall">
            By using this website you accept our{' '}
            <Link to="/terms">Terms of Use</Link> ,{' '}
            <Link to="/social">Social Media Guidelines</Link> , and{' '}
            <Link to="/privacy">Privacy Policy</Link>{' '}
          </span>
          <small>
            <div className="nxt_body-xsmall">
              <p className="font-weight-light text-white-50">
                No bank guarantee • Not a deposit • May lose value • Not
                FDIC/NCUA insured • Not insured by any federal government agency
              </p>
              <p className="font-weight-light text-white-50">
                Pacific Life, its affiliates, its distributors, and respective
                representatives do not provide tax, accounting, or legal advice.
                Any taxpayer should seek advice based on the taxpayer's
                particular circumstances from an independent tax advisor or
                attorney.
              </p>
              <p className="font-weight-light text-white-50">
                Pacific Life is a product provider. It is not a fiduciary and
                therefore does not give advice or make recommendations regarding
                insurance or investment products.
              </p>
              <p className="font-weight-light text-white-50">
                Pacific Life Insurance Company (Newport Beach, CA) is licensed
                to issue insurance products in all states except New York.
                Product availability and features may vary by state. Fixed
                annuity products are available through licensed third parties.
              </p>
              <p className="font-weight-light text-white-50">
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
