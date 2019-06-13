import React from 'react';
import './styles.scss';
import { TimelineMax } from 'gsap';

// components
import AnchorLink from 'react-anchor-link-smooth-scroll';

// media
import Moped from './media/Moped.svg';
import Graduation from './media/Graduation.svg';
import Moving from './media/Moving.svg';
import Office from './media/Office.svg';
import Seamstress from './media/Seamstress.svg';
import SittingOnBeanBag from './media/Sitting-on-bean-bag.svg';
import Family from './media/Family.svg';
import arrow from './media/arrowdown.svg';

class HeroCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // GSAP

    this.tlFirst = new TimelineMax();

    this.tl = new TimelineMax({
      onComplete: function() {
        this.delay(-3);
        this.restart(true);
      },
    });
  }

  componentDidMount() {
    this.tlFirst.staggerTo([this.img0, this.para0], 1, {
      opacity: 0,
      delay: 2,
    });

    // big idea
    this.tl

      .from(
        this.para2,
        0.5,
        {
          delay: 3,
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      )

      .from(this.img2, 1, {
        opacity: 0,
      })

      .staggerTo([this.img2, this.para2], 1, {
        opacity: 0,
        delay: 4,
      });

    // passion
    this.tl

      .from(
        this.para3,
        0.5,
        {
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      )

      .from(this.img3, 1, {
        opacity: 0,
      })

      .staggerTo([this.para3, this.img3], 1, {
        opacity: 0,
        delay: 4,
      });

    // move
    this.tl

      .from(
        this.para4,
        0.5,
        {
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      )
      .from(this.img4, 1, {
        opacity: 0,
      })

      .staggerTo([this.para4, this.img4], 1, {
        opacity: 0,
        delay: 4,
      });

    // office
    this.tl

      .from(
        this.para5,
        0.5,
        {
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      )
      .from(this.img5, 1, {
        opacity: 0,
      })

      .staggerTo([this.para5, this.img5], 1, {
        opacity: 0,
        delay: 4,
      });

    // gradutaion
    this.tl

      .from(
        this.para6,
        0.5,
        {
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      )
      .from(this.img6, 1, {
        opacity: 0,
      })

      .staggerTo([this.para6, this.img6], 1, {
        opacity: 0,
        delay: 4,
      });

    // addition
    this.tl

      .from(
        this.para7,
        0.5,
        {
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      )
      .from(this.img7, 1, {
        opacity: 0,
      })

      .staggerTo([this.para7, this.img7], 1, {
        opacity: 0,
        delay: 4,
      });

    // moped
    this.tl

      .from(
        this.para1,
        0.5,
        {
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      )

      .from(this.img1, 1, {
        opacity: 0,
      })

      .staggerTo([this.img1, this.para1], 1, {
        opacity: 0,
        delay: 4,
      })

      .from(
        this.para1,
        0.5,
        {
          opacity: 0,
          x: window.innerWidth / 85,
        },
        '-=0.25'
      );
  }

  render() {
    return (
      <div>
        <div className="background">
          {/* Moped image Opening */}
          <img
            className="nxt_carousel-img"
            src={Moped}
            alt="Moped"
            ref={div => (this.img0 = div)}
          />
          {/* Moped image */}
          <img
            className="nxt_carousel-img"
            src={Moped}
            alt="Moped"
            ref={div => (this.img1 = div)}
          />
          {/* Seamstress image */}
          <img
            className="nxt_carousel-img"
            src={SittingOnBeanBag}
            alt="SittingOnBeanBag"
            ref={div => (this.img2 = div)}
          />
          {/* Seamstress image */}
          <img
            className="nxt_carousel-img"
            src={Seamstress}
            alt="Seamstress"
            ref={div => (this.img3 = div)}
          />

          {/* Moving image */}
          <img
            className="nxt_carousel-img"
            src={Moving}
            alt="Moving"
            ref={div => (this.img4 = div)}
          />

          {/* Office image */}
          <img
            className="nxt_carousel-img"
            src={Office}
            alt="Office"
            ref={div => (this.img5 = div)}
          />

          {/* Graduation image */}
          <img
            className="nxt_carousel-img"
            src={Graduation}
            alt="Graduation"
            ref={div => (this.img6 = div)}
          />

          {/* Family image */}
          <img
            className="nxt_carousel-img"
            src={Family}
            alt="Family"
            ref={div => (this.img7 = div)}
          />
          <div className="divText">
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <div class="nxt_carousel-header-container">
                    <h1 className="nxt_heading-xlarge">
                      {' '}
                      What’s your{' '}
                      <span className="text-primary">next&nbsp;</span>
                    </h1>
                    <div className="nxt_carousel-animated-text-container">
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para0 = div)}
                      >
                        adventure?
                      </h1>
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para1 = div)}
                      >
                        adventure?
                      </h1>
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para2 = div)}
                      >
                        big idea?
                      </h1>
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para3 = div)}
                      >
                        passion?
                      </h1>
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para4 = div)}
                      >
                        move?
                      </h1>
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para5 = div)}
                      >
                        career?
                      </h1>
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para6 = div)}
                      >
                        gradution?
                      </h1>
                      <h1
                        className="nxt_heading-xlarge"
                        ref={div => (this.para7 = div)}
                      >
                        addition?
                      </h1>
                    </div>
                  </div>
                  {/* <h1 className="nxt_heading-xlarge nxt_carousel-header">
                    What’s your <span className="text-primary">next&nbsp;</span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para0 = div)}
                    >
                      adventure?
                    </span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para1 = div)}
                    >
                      adventure?
                    </span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para2 = div)}
                    >
                      big idea?
                    </span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para3 = div)}
                    >
                      passion?
                    </span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para4 = div)}
                    >
                      move?
                    </span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para5 = div)}
                    >
                      career?
                    </span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para6 = div)}
                    >
                      gradution?
                    </span>
                    <span
                      className="nxt_carousel-text"
                      ref={div => (this.para7 = div)}
                    >
                      addition?
                    </span>
                  </h1> */}
                  <div className="row">
                    <div className="col-md-8 offset-md-2 text-center">
                      <p className="mt-4 circular">
                        Insurance products to complement your life goals and
                        passions. We help you go after whatever's next for you.
                      </p>
                    </div>
                  </div>
                  <AnchorLink
                    href="#bestlife"
                    className="text-decoration-none mt-4"
                  >
                    <p className="mt-4 mb-2 text-uppercase text-primary">
                      Learn More
                    </p>
                    <img
                      className="d-block-inline"
                      width={45}
                      src={arrow}
                      alt="Arrow"
                    />
                  </AnchorLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeroCarousel;
