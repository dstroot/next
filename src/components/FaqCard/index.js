// import
import React from 'react';

//style
import './styles.scss';

//media
import speech_bubble from './media/speech_bubble.svg';
import plant from './media/plant.svg';
import shield from './media/shield.svg';

import checkbox from './media/checkbox.svg';
import clipboard from './media/clipboard.svg';
import moneybag from './media/moneybag.svg';

import legal_document from './media/legal_document.svg';
import dollar_document from './media/dollar_document.svg';
import people_group from './media/people_group.svg';

//TODO - Fix spacing for every 3 card for when the browers is smaller. The problem is caused by the margin on the rows

class FaqCard extends React.Component {
  render() {
    return (
      <div className="bg-light py-6">
        <div className="nxt_heading-xlarge text-center">FAQ</div>
        <div className="my-5 text-center">
          All references to “you or your” assumes the insured and policy owner
          are the same person.
        </div>
        <div className="container">
          <div className="row mb-4">
            {/* CARD 1 */}
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img
                  className="nxt_icon pb-3"
                  src={speech_bubble}
                  alt="Speech Bubble"
                />
                <div>Frequently used terms</div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img className="nxt_icon pb-3" src={plant} alt="Plant" />
                <div>Life insurance basics</div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img className="nxt_icon pb-3" src={shield} alt="Shield" />
                <div>Next Term Life</div>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="row mb-4">
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img className="nxt_icon pb-3" src={checkbox} alt="Checkbox" />
                <div>Eligibility</div>
              </div>
            </div>

            {/* CARD 5 */}
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img
                  className="nxt_icon pb-3"
                  src={clipboard}
                  alt="Clipboard"
                />
                <div>Applying</div>
              </div>
            </div>

            {/* CARD 6 */}
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img className="nxt_icon pb-3" src={moneybag} alt="Moneybag" />
                <div>Premium Payment</div>
              </div>
            </div>
          </div>

          {/* CARD 7 */}
          <div className="row mb-4">
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img
                  className="nxt_icon pb-3"
                  src={legal_document}
                  alt="Legal Document"
                />
                <div>Managing Your Policy</div>
              </div>
            </div>

            {/* CARD 8 */}
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img
                  className="nxt_icon pb-3"
                  src={dollar_document}
                  alt="Dollar Document"
                />
                <div>Claims</div>
              </div>
            </div>

            {/* CARD 9 */}
            <div className="col-sm text-center">
              <div className="card h-40 py-4">
                <img
                  className="nxt_icon pb-3"
                  src={people_group}
                  alt="People Group"
                />
                <div>Beneficiaries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FaqCard;
