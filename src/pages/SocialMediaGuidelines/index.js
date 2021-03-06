import React, { useEffect } from 'react';

// components
import Disclaimer from '../../components/Disclaimer';
import Footer from '../../components/Footer';

const SocialMediaGuidelines = () => {
  // Set the page title and position using the useEffect hook
  useEffect(() => {
    document.title = `Pacific Life • SocialMediaGuidelines`;
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Disclaimer
        header="Social Media Guidelines"
        content={
          <div>
            <p>
              Please read the following guidelines to ensure a safe and
              productive experience. The insurance and investment industries are
              highly regulated; therefore, we cannot engage in discussions on
              social forums about our products, services, or solutions.
            </p>
            <p>
              Pacific Life asks you to observe the following guidelines while on
              the Company's social media sites, including but not limited to,
              Facebook, Twitter, LinkedIn, Instagram, and YouTube. Social media
              sites are public domain and Pacific Life cannot be responsible for
              any posting or content by a third party. The opinions, comments,
              photos and video posted by fans or followers do not represent
              those of Pacific Life. We reserve the right to moderate and delete
              any post, comment, content, etc. at any time and without notice if
              it is violation of the following terms of use. Pacific Life
              reserves the right to ban users without notice or consent. We will
              consistently monitor the sites to ensure the guidelines below are
              being followed. These guidelines may be updated without notice.
            </p>
            <p>
              <u>
                The following types of posts will be deleted, removed, or hidden
                at the Company's discretion:
              </u>
            </p>
            <ul>
              <li>
                Posts that include fraudulent, inaccurate, negative, libelous,
                false, or misleading information about Pacific Life or its
                competitors.
              </li>
              <li>
                Posts that are disparaging in nature or include offensive,
                inflammatory or inappropriate commentary, and/or content.
              </li>
              <li>
                Posts that include profanity or are defamatory, abusive,
                discriminatory or demeaning.
              </li>
              <li>
                Posts that contain threats, suggest violence or illegal behavior
                will be deleted and users will be blocked.
              </li>
              <li>
                Posts that contain any personal information such as email
                addresses, phone numbers, account numbers, or any confidential
                information such as social security numbers.
              </li>
              <li>
                Posts that spam, solicit, advertise, promote or endorse any
                commercial, financial, political or governmental organization.
                Our social media pages are not for the endorsement of third
                parties and these posts will be removed.
              </li>
            </ul>
            <p>
              <u>
                Here are some best practices to keep in mind to ensure your
                post, comment or message will not be deleted:
              </u>
            </p>
            <ul>
              <li>
                Do not violate another's copyright or intellectual property.
              </li>
              <li>
                Do not be disruptive with posts that are excessively repetitive.
                If we remove your post, please do not repost as your post was
                likely in violation of these guidelines.
              </li>
              <li>
                Do not post any information that contains proprietary,
                confidential, sensitive, or nonpublic information.
              </li>
              <li>
                Do not post links that contain any kind of virus, spyware, or
                malware.
              </li>
              <li>
                Do not engage in any activity that would qualify as insider
                trading.
              </li>
              <li>
                Do not act as a representative or spokesperson for Pacific Life.
              </li>
              <li>
                Do not post financial recommendations as there are serious
                implications for unsolicited advice.
              </li>
              <li>
                Please stay on topic so that the conversation can remain
                relevant. Use common courtesy within our community and share
                your opinions and feedback in a respectful manner.
              </li>
            </ul>
            <p>
              Pacific Life does not assume responsibility for content, opinions,
              statements or viewpoints posted by fans on company social media
              pages. As an organization Pacific Life does not make endorsements
              via social media. We may post information to third party sites if
              we find the information useful or relevant but this does not
              constitute an official endorsement or recommendation on behalf of
              Pacific Life. Any content, including posts, responses, and videos,
              on our social media sites should not be considered as an
              advertisement, endorsement or financial advice.
            </p>
            <p>
              Pacific Life will never solicit or ask for personal information
              through social media. Do not post or direct message sensitive
              personal, confidential, and financial information via social
              media. Keep your personal information secure and private. Pacific
              Life does not participate in online lotteries and is not involved
              in the disbursement of prize money for lotteries operated on
              social media. If you have been subjected to an online crime please
              file a complaint with{' '}
              <a
                target="_blank"
                href="https://www.ic3.gov/default.aspx"
                rel="noopener noreferrer"
              >
                www.ic3.gov
              </a>
              . If you receive a questionable email or social media message that
              contains Pacific Life's name or logo, and the message asks you for
              personal or financial information, DO NOT RESPOND or click any
              links in the email. If you have any concerns about a message that
              you have received, please call the Pacific Life Privacy toll-free
              number (877) 722-7848.
            </p>
            <p>
              Social media sites are not affiliated with Pacific Life; please
              review privacy policies and terms of service for each site. By
              going to these sites you assume risk of use.
            </p>
            <p className="ml-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/communitystandards"
              >
                facebook.com/communitystandards
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/privacy"
              >
                twitter.com/privacy
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://help.linkedin.com/app/answers/detail/a_id/34593/"
              >
                help.linkedin.com/app/answers/detail/a_id/34593/
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://help.instagram.com/477434105621119"
              >
                help.instagram.com/477434105621119
              </a>
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.youtube.com/yt/policyandsafety/policy.html"
              >
                youtube.com/yt/policyandsafety/policy.html
              </a>
              <br />
            </p>
            <p>
              If you have any comments, questions or concerns please email
              PublicAffairs@PacificLife.com . Please note we cannot reply to
              every comment or message. Pacific Life cannot answer customer
              service related questions via social media. Social media should
              not be used for the submission of any claim, complaint, or product
              inquiry. Please refer to our website for contact information.
            </p>
            <p>
              For more than 150 years, Pacific Life has been helping individuals
              and families with a portfolio of insurance products, annuities,
              and mutual funds. Thank you for your interest in our brand.
            </p>
          </div>
        }
      />
      <Footer />
    </div>
  );
};

export default SocialMediaGuidelines;
