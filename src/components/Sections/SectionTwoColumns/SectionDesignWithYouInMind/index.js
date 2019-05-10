import React from 'react';
import ReactDOM from 'react-dom';
import { Tween, TimelineLite, TweenMax } from 'gsap';
import { TimelineMax } from 'gsap/src/uncompressed/TweenMax.js';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

// styles
import './styles.scss';

// component
import SectionTwoColumns from '..';

// import image
import womanphone from './media/womanphone.svg';

class SectionDesignWithYouInMind extends React.Component {
  constructor(props) {
    super(props);
    /* // GSAP
    this.tl = new TimelineLite();
    this.para1 = null;
    this.movePara1 = null;
    this.para2 = null;
    this.movePara2 = null;
    this.para3 = null;
    this.movePara3 = null;

    // Scrollmagic
    this.controller = new ScrollMagic.Controller(); */
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    /* // GSAP Timeline
    this.tl
      .to(this.para1, 2, { y: -100 })
      .to(this.para2, 2, { y: -100 })
      .to(this.para3, 2, { y: -100 });

    // Scrollmagic
    new ScrollMagic.scene({
      triggerElement: '#startScroll',
    })
      .setTween(tl)
      .setPin('#startScroll'); */

    new ScrollMagic.Scene({
      triggerElement: '#scrollStarts',
      duration: 1000, // scroll distance
      // offset: 500, // start this scene after scrolling for 50px
    })
      // .setTween('#myElement', {
      //   scale: 2,
      // })
      .setClassToggle('#reveal1', 'visible')
      .setTween('#reveal1', { scale: 2, color: '#00A678' })
      // .setPin('#myElement') // pins the element for the the scene's duration
      .addTo(this.controller);
  }

  render() {
    return (
      <div id="scrollStarts">
        <SectionTwoColumns
          sectionHead="Designed with you in mind"
          contentLeft={
            <img
              className="img-fluid p-5"
              src={womanphone}
              alt="Woman with the Phone"
            />
          }
          contentRight={
            <div>
              <div id="reveal1">
                <h2 className="nxt_heading-small mb-2"> Fearlessly Flexible</h2>
                <p className="mb-5">
                  Our products adapt to your life’s biggest moments. Change them
                  when your needs do.
                </p>
              </div>
              <div id="reveal1">
                <h2 className="nxt_heading-small mb-2">Radically Simple</h2>
                <p className="mb-5">
                  Straight forward products and features. Know what you're
                  getting from the beginning.
                </p>
              </div>
              <div id="reveal1">
                <h2 className="nxt_heading-small mb-2">Brazenly Transparent</h2>
                <p className="mb-5">No hidden fees or charges.</p>
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default SectionDesignWithYouInMind;

/* const SectionDesignWithYouInMind = () => {
  return (
    <div>
      <SectionTwoColumns
        sectionHead="Designed with you in mind"
        contentLeft={
          <img
            className="img-fluid p-5"
            src={womanphone}
            alt="Woman with the Phone"
          />
        }
        contentRight={
          <div>
            <h2 className="nxt_heading-small mb-2"> Fearlessly Flexible</h2>
            <p className="mb-5">
              Our products adapt to your life’s biggest moments. Change them
              when your needs do.
            </p>
            <h2 className="nxt_heading-small mb-2">Radically Simple</h2>
            <p className="mb-5">
              Straight forward products and features. Know what you're getting
              from the beginning.
            </p>
            <h2 className="nxt_heading-small mb-2">Brazenly Transparent</h2>
            <p className="mb-5">No hidden fees or charges.</p>
          </div>
        }
      />
    </div>
  );
};

export default SectionDesignWithYouInMind; */
