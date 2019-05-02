import React from 'react';

// components
import SectionTwoColumns from '../../SectionTwoColumns';

// image
import designsystemhi from '../../SectionTwoColumns/SectionDesignPrinciples/media/designsystemhi.svg';

const SectionDesignPrinciples = () => {
  return (
    <SectionTwoColumns
      sectionHeadStyle="text-center mb-5"
      sectionHead="Our Design Principles"
      contentLeft={<img src={designsystemhi} alt="Design System" />}
      contentRight={
        <div className="m-5">
          <h3 className="nxt_heading-small"> Simplicity </h3>
          <p className="pb-4">
            We strive to design products that are easy to use and understand.
            While it might seem that adding optional benefits to a product
            offers flexibility, it can increase complexity. Keeping the focus on
            fundamental value results in a better experience for the customer.
          </p>
          <h3 className="nxt_heading-small"> Empowerment </h3>
          <p className="pb-4">
            Reinforcing and celebrating positive actions toward customer’s
            financial health helps them realize success. We give customers
            confidence in going after their passions and goals.
          </p>
          <h3 className="nxt_heading-small"> Flexibility </h3>
          <p className="pb-4">
            We recognize that customers’ needs change over time. Adopting a
            fluid mindset helps us design products that adapt to the customer
            over time.
          </p>
          <h3 className="nxt_heading-small"> Engagement </h3>
          <p className="pb-4">
            Customers expect that we will be around for their entire lives, but
            traditionally most contact is at time of purchase and claims. We
            interact with customers in a meaningful and helpful way throughout
            the lifelong partnership.
          </p>
          <h3 className="nxt_heading-small"> Transparency </h3>
          <p className="pb-4">
            We believe in an open and honest dialogue. Our industry may be
            complex, but we choose to always work in the best interest of the
            customer. That means we have to be clear about how our products work
            and the value they provide.
          </p>
        </div>
      }
    />
  );
};

export default SectionDesignPrinciples;
