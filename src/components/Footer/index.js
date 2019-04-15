import React from 'react';
import './styles.scss';

import logo from './media/NXT_logo_footer_dark.svg';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark mt-5">
      <div className="row">
        <div className="col p-5">
          <img src={logo} className="pr-3 pb-3" alt="Logo" />
          <span className="font-weight-light text-white-50">
            By using this website you accept our{' '}
            <a
              href="https://www.meetnext.com/s/terms"
              className="text-accent text-decoration-none"
            >
              Terms of Use
            </a>
            ,{' '}
            <a
              href="https://www.meetnext.com/s/social"
              className="text-accent text-decoration-none"
            >
              Social Media Guidelines
            </a>
            , and{' '}
            <a
              href="https://www.meetnext.com/s/privacy"
              className="text-accent text-decoration-none"
            >
              Privacy Policy
            </a>
          </span>
          <small>
            <p className="font-weight-light text-white-50">
              No bank guarantee • Not a deposit • May lose value • Not FDIC/NCUA
              insured • Not insured by any federal government agency
            </p>
            <p className="font-weight-light text-white-50">
              Pacific Life, its affiliates, its distributors, and respective
              representatives do not provide tax, accounting, or legal advice.
              Any taxpayer should seek advice based on the taxpayer's particular
              circumstances from an independent tax advisor or attorney.
            </p>
            <p className="font-weight-light text-white-50">
              Pacific Life is a product provider. It is not a fiduciary and
              therefore does not give advice or make recommendations regarding
              insurance or investment products.
            </p>
            <p className="font-weight-light text-white-50">
              Pacific Life Insurance Company (Newport Beach, CA) is licensed to
              issue insurance products in all states except New York. Product
              availability and features may vary by state. Fixed annuity
              products are available through licensed third parties.
            </p>
            <p className="font-weight-light text-white-50">
              © 2019 Pacific Life Insurance Company, Newport Beach, CA.
            </p>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
