import React, { useEffect } from 'react';

// components
import Disclaimer from '../../components/Disclaimer';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • PrivacyPolicy`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Disclaimer
        header="Privacy Policy"
        content={
          <div>
            <h2 className="nxt_heading-small">Introduction</h2>
            <p>
              The privacy of your information is important to us. We are
              committed to maintaining the highest level of confidentiality with
              all of the information we receive through our websites.
            </p>
            <p>
              Pacific Life has established the following Online Privacy Policy
              that describes how we use the information we collect from our
              website visitors. To learn more about how we protect information
              that is collected when you apply for a product or service, please
              refer to Our Privacy Promise.
            </p>
            <h2 className="nxt_heading-small">
              Collection and Use of Personal Information
            </h2>
            <p>
              Visitors are not required to provide personal information to
              browse the information found on our websites. Personal information
              is only collected when you voluntarily provide it to us, for
              example when you first log into your account or submit personal
              information in an online form. Personal information may include
              first and last name, address, email address, telephone number, and
              Social Security number.
            </p>
            <p>
              Information provided by you through our websites is used only to
              help maintain the business relationship you have with us, or
              encourage such a relationship. We do not sell information about
              you. We do not share your information with anyone else for their
              marketing purposes.
            </p>
            <h2 className="nxt_heading-small">Tracking Website Visitors </h2>
            <p>
              Pacific Life gathers aggregate tracking information from our
              website visitors. This aggregate tracking information is:
            </p>
            <ol>
              <li>
                Collected on an aggregate, anonymous basis, which means no
                personal information is associated with this data.
              </li>
              <li>
                Gathered through the use of Web server logs and cookies. A Web
                server log is a file where website activity is stored. A cookie
                is a small piece of information that a website sends to a
                visitor's computer, which is stored on his or her hard drive.
                Pacific Life uses cookies to track repeat visits to its website.
                Although Pacific Life assigns a cookie to a visitor's computer,
                the company does not know who that visitor is unless that person
                specifically tells us.
              </li>
              <li>
                Shared among Pacific Life business units to improve website
                content and overall service.
              </li>
              <li>
                Used for purposes of direct marketing to visitors to our website
                through social platforms.
              </li>
            </ol>
            <p>
              To enable us to continually improve the content we offer our
              website visitors, as well as for systems administration purposes,
              we collect aggregate information site-wide. This gives us an idea
              of which parts of our website you are visiting. We do not link IP
              addresses to anything personally identifiable, which means a
              visitor's session will be tracked, but the user will remain
              anonymous.
            </p>
            <p>
              If Pacific Life receives 'do not track' signals, we do not take
              any action to comply with such requests.
            </p>
            <h2 className="nxt_heading-small"> Website Security </h2>
            <p>
              Pacific Life is committed to protecting the personal information
              you entrust to us. That is why we use the most current encryption
              technology available to ensure secure transmission of your
              information provided through our secure log in screens and online
              forms.
            </p>
            <p>
              Please understand that the Internet is not a completely secure
              medium of communication. Unless the specific access location says
              otherwise, messages sent to or from this website may be accessed
              by unauthorized users. To protect your privacy, please do not use
              email to communicate information that you want kept confidential.
            </p>
            <p>
              If you are concerned about the security of the Internet for the
              communication of personal information, you may consider using
              alternative forms of communication such as telephone, fax, or
              regular mail.
            </p>
            <p>
              We do not guarantee or warrant that any part of this Website,
              including files available for download, are free of viruses or
              other harmful code. It is your responsibility to take appropriate
              precautions, such as the use of anti-virus software, to protect
              your computer hardware and software while using the Internet.
            </p>
            <p>
              Please review this Online Privacy Policy frequently as it may
              change at any time at Pacific Life's sole discretion.
            </p>
            <p>Updated: July 2016</p>

            <div className="nxt_heading-xlarge text-center py-6">
              Our Privacy Promise
            </div>

            <ul>
              <li>We do not sell information about you.</li>
              <li>
                We do not share your information with anyone else for their
                marketing purposes.
              </li>
              <li>
                We use your personal information only to help maintain and grow
                the business relationship you have with us.
              </li>
            </ul>
            <h2 className="nxt_heading-small">
              Privacy Notice to Our Customers
            </h2>
            <p>
              As our customer, you trust us to help you achieve financial
              success and security. We provide this notice because you have a
              right to know how we protect the privacy of the personal
              information you share with us. Your knowledge of our privacy
              principles and practices will confirm the trust you have placed in
              us.
            </p>
            <h2 className="nxt_heading-small">
              What Personal Information Do We Collect?
            </h2>
            <p>
              The type of information that we collect depends on the type of
              product or service you request. This includes:
            </p>
            <p>
              Information you provide on an application or other form (for
              example, name, address, social security number, or income).
              Information we get from other sources such as credit reporting
              agencies and information to verify employment or income.
              Information about your business relationship and history with us.
              Medical or health information you permit us to receive from
              doctors or other health care providers. Most of the personal
              information we collect is obtained from you. We collect personal
              information needed only to service and manage your relationship
              with us.
            </p>
            <h2 className="nxt_heading-small">
              How Do We Use and Disclose Your Information?
            </h2>
            <p>
              The main use of your information is to confirm your identity in
              the course of business that we perform at your request. We also
              use your information to underwrite policies or contracts, process
              claims, and service your relationship with us.
            </p>
            <p>
              Information may be disclosed to other entities that provide
              business services to us related to our relationship with you. This
              includes administrative, claims, or audit services. Examples are
              your producer/registered representative, broker, or a reinsurance
              company. Before we disclose your information, these entities must
              agree to keep it private.
            </p>
            <p>
              We may also share information within our corporate family to
              service and grow the business relationship we have with you. For
              example, ourbusiness units provide administrative services, policy
              document preparation and delivery, and claims processing.
              Additionally, we may provide information to individuals and
              entities with whom you authorize us to share.
            </p>
            <p>
              If necessary, we disclose information when it is required by law.
              An example is a routine filing to the Internal Revenue Service
              (such as a Form 1099). We may also disclose certain information to
              other entities to help us report or prevent fraud. Examples are
              reports to a regulatory or law enforcement agency.
            </p>
            <h2 className="nxt_heading-small">
              What Medical and Health Information Do We Collect?
            </h2>
            <p>
              We may receive medical or health information about you. This may
              be on an application for insurance or when we process a claim, as
              approved by you in writing. We do not share that medical or health
              information among our family of companies. We do not share it with
              unrelated companies, except as needed to process your
              transactions. This may be necessary to provide services that you
              have requested related to your insurance coverage or payment.
            </p>
            <h2 className="nxt_heading-small">
              How Do We Protect the Security of Your Information?
            </h2>
            <p>
              We have policies to maintain physical, electronic, and procedural
              safeguards to protect the confidentiality of your personal
              information. Access to personal information is available only to
              those people who need to know it in order to help service our
              relationship with you.
            </p>
            <p>
              Should your relationship with us end, we will continue to follow
              the privacy policies described in this notice to the extent that
              we retain information about you. If we no longer need to retain
              that information, we will dispose of it in a secure manner.
            </p>
            <h2 className="nxt_heading-small">Do You Need to Do Anything?</h2>
            <p>
              It is not necessary for you to take any action. This is because we
              do not share your information except to service the business
              relationship you have with us. You do not need to “opt-out” or
              “opt-in” as you may have done with other financial companies.
            </p>
            <h2 className="nxt_heading-small">
              How Can You See And Correct Your Information?
            </h2>
            <p>
              Generally, you have the right to review the personal information
              we have about you. You must request this in writing. We will not
              disclose information we have collected in connection with a claim
              or lawsuit. If you believe that any of the information we have is
              in error, you may write us and request a correction. Where
              justified, corrections will be made.
            </p>
            <p>
              Confidentiality Practices for Victims of Domestic Violence or
              Abuse Pacific Life understands that certain personal information
              may require special handling. This may be especially true in
              instances where an individual is, or has been, a victim of
              domestic violence or abuse. This information may include the
              individual’s address, telephone number, name and place of
              employment, and other contact or location information.
            </p>
            <p>
              If you are a Pacific Life applicant, policyowner, insured or
              beneficiary, who is a victim of domestic violence or other abuse,
              and would like Pacific Life to take steps to further safeguard
              your information from others or need to remove a previously
              submitted request, our Customer Service Representatives are
              available to assist you.
            </p>
            <ul>
              <li>
                For Life Insurance policies that have policy numbers beginning
                with “2L”, please call 844-276-0191 from 9:00AM-8:00PM ET.
              </li>
              <li>
                For all other Life Insurance policies, please call 800-374-7787
                from 5:00AM-5:00PM PT.
              </li>
              <li>
                For Annuity Contracts, please call 800-722-4448, from
                6:00AM-5:00PM PT.
              </li>
            </ul>
            <p>
              Please direct inquiries about accessing or correcting your
              information to the address below:
            </p>
            <p>
              Pacific Life Privacy Office 700 Newport Center Drive Newport
              Beach, CA 92660
            </p>
            <p>
              If you have questions regarding Our Privacy Promise, please call
              toll free (877) 722-7848
            </p>
            <p>
              Please have a copy of your policy or contract available when you
              call so we may provide you with the best service.
            </p>
            <p>You may also review Pacific Life’s Online Privacy Policy.</p>
            <p>
              Pacific Life will provide you a copy of our Privacy Promise
              annually.
            </p>
            <p>Pacific Life, as referred to in this notice, includes:</p>
            <p>
              Pacific Life Insurance Company Pacific Life &amp; Annuity Company
              Pacific Select Distributors, LLC
            </p>
            <p className="text-right">
              <b>
                <i>Issued: April 2018</i>
              </b>
            </p>
          </div>
        }
      />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
