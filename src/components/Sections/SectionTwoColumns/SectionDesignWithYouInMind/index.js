import React from 'react';
import { TimelineLite } from 'gsap';
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
    // GSAP
    this.tl = new TimelineLite();

    this.para1 = null;
    this.para2 = null;
    this.para3 = null;

    // Scrollmagic
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    // GSAP Timeline
    this.tl
      .from(this.para1, 20, { opacity: 0, y: 100 })
      .to(this.para1, 20, { opacity: 0 })
      .from(this.para2, 20, { opacity: 0, y: 100 })
      .to(this.para2, 20, { opacity: 0 })
      .from(this.para3, 20, { opacity: 0, y: 100 });

    // Scrollmagic
    new ScrollMagic.Scene({
      triggerElement: '#scrollStarts',
      duration: '600%', // increase duration of each animated scroll
      offset: 540, // start this scene after triggerElement
    })
      .setTween(this.tl)
      .setPin('#scrollStarts')
      .addTo(this.controller);
  }

  render() {
    return (
      <div>
        {/* extra div required for scrollmagic reach-router fix */}
        <div id="scrollStarts">
          <SectionTwoColumns
            styleLeft="order-2 order-sm-1"
            styleRight="order-1 order-sm-2"
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
                <div className="para" ref={div => (this.para1 = div)}>
                  <h2 className="nxt_heading-small mb-2">
                    Fearlessly Flexible
                  </h2>
                  <p className="mb-5">
                    Our products adapt to your life’s biggest moments. Change
                    them when your needs do.
                  </p>
                </div>
                <div className="para" ref={div => (this.para2 = div)}>
                  <h2 className="nxt_heading-small mb-2">Radically Simple</h2>
                  <p className="mb-5">
                    Straight forward products and features. Know what you're
                    getting from the beginning.
                  </p>
                </div>
                <div className="para" ref={div => (this.para3 = div)}>
                  <h2 className="nxt_heading-small mb-2">
                    Brazenly Transparent
                  </h2>
                  <p className="mb-5">No hidden fees or charges.</p>
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default SectionDesignWithYouInMind;
