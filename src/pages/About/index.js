import React, { useEffect } from 'react';

// component
import SectionBornInCalifornia from '../../components/Sections/SectionHero/SectionBornInCalifornia';
import SectionOurStory from '../../components/Sections/SectionTwoColumns/SectionOurStory';
import SectionDesignPrinciples from '../../components/Sections/SectionTwoColumns/SectionDesignPrinciples';
import SectionBackedByPL from '../../components/Sections/SectionTwoColumnsMultipleRows/SectionBackedByPL';
import FooterCustom from '../../components/FooterCustom';

const About = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `NEXT • About`;
  });

  return (
    <div>
      <SectionBornInCalifornia />

      <SectionOurStory />
      <SectionDesignPrinciples />
      <SectionBackedByPL />
      <FooterCustom
        content={
          <div className="nxt_footer">
            <p>
              *Reflects the combined results of Pacific Life Insurance Company
              and its insurance subsidiaries on a statutory basis and primarily
              includes death and annuity benefits paid.
            </p>
            <p>
              An insurer's financial strength rating represents an opinion by
              the issuing agency regarding the ability of an insurance company
              to meet its financial obligations to its policyholders and
              contract holders. A rating is an opinion of the rating agency
              only, and not a statement of fact or recommendation to purchase,
              sell or hold any security, policy or contract. These ratings do
              not imply approval of our products and do not reflect any
              indication of their performance. For more information about a
              particular rating or rating agency, please visit the website of
              the relevant agency.
            </p>
            <p>
              No bank guarantee • Not a deposit • May lose value • Not FDIC/NCUA
              insured • Not insured by any federal government agency
            </p>
            <p>
              Pacific Life, its affiliates, its distributors, and respective
              representatives do not provide tax, accounting, or legal advice.
              Any taxpayer should seek advice based on the taxpayer's particular
              circumstances from an independent tax advisor or attorney.
            </p>
            <p>
              <i>
                Pacific Life is a product provider. It is not a fiduciary and
                therefore does not give advice or make recommendations regarding
                insurance or investment products.
              </i>
            </p>
            <p>
              Pacific Life Insurance Company (Newport Beach, CA) is licensed to
              issue insurance products in all states except New York. Product
              availability and features may vary by state. Fixed annuity
              products are available through licensed third parties.
            </p>
          </div>
        }
      />
    </div>
  );
};

export default About;
