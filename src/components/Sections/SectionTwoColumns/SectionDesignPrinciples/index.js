import React from 'react';
import TimelineLite from 'gsap/TimelineLite';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import './styles.scss';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

// components
import SectionTwoColumns from '..';

// media
import Easel from './media/Easel.svg';
import Flag from './media/Flag.svg';
import Hi from './media/Hi.svg';
import Lock from './media/Lock.svg';
import Lollypop from './media/Lollypop.svg';
import PaperPlane from './media/PaperPlane.svg';

// import SectionDesignPrinciples from '.';

class SectionDesignPrinciples extends React.Component {
  constructor(props) {
    super(props);
    // GSAP Stuff
    this.tl = new TimelineLite();

    this.para1 = null;
    this.img1 = null;
    this.para2 = null;
    this.img2 = null;
    this.para3 = null;
    this.img3 = null;
    this.para4 = null;
    this.img4 = null;
    this.para5 = null;
    this.img5 = null;

    // Scrollmagic
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    //GSAP Timeline
    this.tl
      .from(this.para1, 80, { opacity: 0, y: 100 })
      .from(this.img1, 80, { opacity: 0 }, '-=80')
      .to(this.para1, 80, { opacity: 0, y: -100 })
      .to(this.img1, 80, { opacity: 0 }, '-=80')
      .from(this.para2, 80, { opacity: 0, y: 100 })
      .from(this.img2, 80, { opacity: 0 }, '-=80')
      .to(this.para2, 80, { opacity: 0, y: -100 })
      .to(this.img2, 80, { opacity: 0 }, '-=80')
      .from(this.para3, 80, { opacity: 0, y: 100 })
      .from(this.img3, 80, { opacity: 0 }, '-=80')
      .to(this.para3, 80, { opacity: 0, y: -100 })
      .to(this.img3, 80, { opacity: 0 }, '-=80')
      .from(this.para4, 80, { opacity: 0, y: 100 })
      .from(this.img4, 80, { opacity: 0 }, '-=80')
      .to(this.para4, 80, { opacity: 0, y: -100 })
      .to(this.img4, 80, { opacity: 0 }, '-=80')
      .from(this.para5, 80, { opacity: 0, y: 100 })
      .from(this.img5, 80, { opacity: 0 }, '-=80');
    new ScrollMagic.Scene({
      triggerElement: '#triggerODP',
      triggerHook: 0,
      duration: '1000%',
      offset: -10,
    })
      .setTween(this.tl)
      .setPin('#pinODP')
      // .addIndicators() // for debugging
      .addTo(this.controller);
  }

  render() {
    return (
      <div>
        <div id="triggerODP">
          <div id="pinODP">
            <SectionTwoColumns
              sectionHeadStyle="text-center mb-5"
              sectionHead="Our Design Principles"
              styleLeft="order-2 order-sm-1"
              styleRight="order-1 order-sm-2"
              contentLeft={
                // add spacing to the end of the page since the image is larger then the conteiner
                <div className="text-center mb-6" id="easel-container">
                  <img
                    id="easel"
                    className="mq-tall-image"
                    src={Easel}
                    alt="Design System"
                  />
                  <img
                    ref={img => (this.img1 = img)}
                    className="easel-icon"
                    src={Lollypop}
                    alt="Lollypop"
                    width={65}
                  />
                  <img
                    ref={img => (this.img2 = img)}
                    className="easel-icon"
                    src={Flag}
                    alt="Flag"
                    width={90}
                  />
                  <img
                    ref={img => (this.img3 = img)}
                    className="easel-icon"
                    src={PaperPlane}
                    alt="Paper Plane"
                  />
                  <img
                    ref={img => (this.img4 = img)}
                    className="easel-icon"
                    src={Hi}
                    alt="Hi"
                    width={85}
                  />
                  <img
                    ref={img => (this.img5 = img)}
                    className="easel-icon"
                    src={Lock}
                    alt="Lock"
                  />
                </div>
              }
              noFadeContentRight={
                <div className="m-4" id="mq-para-container">
                  <div className="mt-2 mq-para" ref={div => (this.para1 = div)}>
                    <h3 className="nxt_heading-small"> Simplicity </h3>
                    <p className="pb-1">
                      We strive to design products that are easy to use and
                      understand. While it might seem that adding optional
                      benefits to a product offers flexibility, it can increase
                      complexity. Keeping the focus on fundamental value results
                      in a better experience for the customer.
                    </p>
                  </div>
                  <div className="mt-2 mq-para" ref={div => (this.para2 = div)}>
                    <h3 className="nxt_heading-small"> Empowerment </h3>
                    <p className="pb-1">
                      Reinforcing and celebrating positive actions toward
                      customer’s financial health helps them realize success. We
                      give customers confidence in going after their passions
                      and goals.
                    </p>
                  </div>
                  <div className="mt-2 mq-para" ref={div => (this.para3 = div)}>
                    <h3 className="nxt_heading-small"> Flexibility </h3>
                    <p className="pb-1">
                      We recognize that customers’ needs change over time.
                      Adopting a fluid mindset helps us design products that
                      adapt to the customer over time.
                    </p>
                  </div>
                  <div className="mt-2 mq-para" ref={div => (this.para4 = div)}>
                    <h3 className="nxt_heading-small"> Engagement </h3>
                    <p className="pb-1">
                      Customers expect that we will be around for their entire
                      lives, but traditionally most contact is at time of
                      purchase and claims. We interact with customers in a
                      meaningful and helpful way throughout the lifelong
                      partnership.
                    </p>
                  </div>
                  <div className="mt-2 mq-para" ref={div => (this.para5 = div)}>
                    <h3 className="nxt_heading-small"> Transparency </h3>
                    <p className="pb-">
                      We believe in an open and honest dialogue. Our industry
                      may be complex, but we choose to always work in the best
                      interest of the customer. That means we have to be clear
                      about how our products work and the value they provide.
                    </p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionDesignPrinciples;
