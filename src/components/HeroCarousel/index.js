import React from 'react';
import './styles.scss';
import { TimelineMax } from 'gsap';

// components
import AnchorLink from 'react-anchor-link-smooth-scroll';

// media
import MopedBg from './media/Moped-bg.svg';
import MopedMain from './media/Moped-main.svg';

import BeanBagBg from './media/Bean-bag-bg.svg';
import BeanBagMain from './media/Bean-bag-main.svg';

import SeamstressBg from './media/Seamstress-bg.svg';
import SeamstressMain from './media/Seamstress-main.svg';

import MovingBg from './media/Moving-bg.svg';
import MovingMain from './media/Moving-main.svg';

import OfficeBg from './media/Office-bg.svg';
import OfficeMain from './media/Office-main.svg';

import GraduationBg from './media/Graduation-bg.svg';
import GraduationMain from './media/Graduation-main.svg';

import FamilyBg from './media/Family-bg.svg';
import FamilyMain from './media/Family-main.svg';

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
    this.tlFirst.staggerTo([this.para0, this.img0, this.bg0], 1, {
      opacity: 0,
      delay: 2,
    });
    // ======================== big idea ========================
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
      .from(this.bg2, 2, { delay: 0.5, opacity: 0 }, '-=1.25')
      .staggerTo([this.para2, this.img2, this.bg2], 1, {
        opacity: 0,
        delay: 4,
      });
    // ======================== passion ========================
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
      .from(this.bg3, 2, { delay: 0.5, opacity: 0 }, '-=1.25')
      .staggerTo([this.para3, this.img3, this.bg3], 1, {
        opacity: 0,
        delay: 4,
      });
    // ======================== move ========================
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
      .from(this.bg4, 2, { delay: 0.5, opacity: 0 }, '-=1.25')
      .staggerTo([this.para4, this.img4, this.bg4], 1, {
        opacity: 0,
        delay: 4,
      });
    // ======================== office ========================
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
      .from(this.bg5, 2, { delay: 0.5, opacity: 0 }, '-=1.25')
      .staggerTo([this.para5, this.img5, this.bg5], 1, {
        opacity: 0,
        delay: 4,
      });
    // ======================== gradutaion ========================
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
      .from(this.bg6, 2, { delay: 0.5, opacity: 0 }, '-=1.25')
      .staggerTo([this.para6, this.img6, this.bg6], 1, {
        opacity: 0,
        delay: 4,
      });
    // ======================== addition ========================
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
      .from(this.bg7, 2, { delay: 0.5, opacity: 0 }, '-=1.25')
      .staggerTo([this.para7, this.img7, this.bg7], 1, {
        opacity: 0,
        delay: 4,
      });
    // ======================== moped ========================
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
      .from(this.bg1, 2, { delay: 0.5, opacity: 0 }, '-=1.25')
      .staggerTo([this.img1, this.para1, this.bg1], 1, {
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
          {/* ======================== Moped Slide Opening ======================== */}
          <img
            className="nxt_carousel-img"
            src={MopedBg}
            alt="MopedBg"
            ref={div => (this.bg0 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={MopedMain}
            alt="MopedMain"
            ref={div => (this.img0 = div)}
          />
          {/* ======================== Moped Slide ======================== */}
          <img
            className="nxt_carousel-img"
            src={MopedBg}
            alt="MopedBg"
            ref={div => (this.bg1 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={MopedMain}
            alt="MopedMain"
            ref={div => (this.img1 = div)}
          />

          {/* ======================== Bean bag Slide ======================== */}
          <img
            className="nxt_carousel-img"
            src={BeanBagBg}
            alt="BeanBagBg"
            ref={div => (this.bg2 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={BeanBagMain}
            alt="BeanBagMain"
            ref={div => (this.img2 = div)}
          />
          {/* ======================== Seamstress Slide ======================== */}
          <img
            className="nxt_carousel-img"
            src={SeamstressBg}
            alt="SeamstressBg"
            ref={div => (this.bg3 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={SeamstressMain}
            alt="SeamstressMain"
            ref={div => (this.img3 = div)}
          />

          {/* ======================== Moving Slide ======================== */}
          <img
            className="nxt_carousel-img"
            src={MovingBg}
            alt="Moving"
            ref={div => (this.bg4 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={MovingMain}
            alt="MovingMain"
            ref={div => (this.img4 = div)}
          />

          {/* ======================== Office Slide ======================== */}
          <img
            className="nxt_carousel-img"
            src={OfficeBg}
            alt="OfficeBg"
            ref={div => (this.bg5 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={OfficeMain}
            alt="OfficeMain"
            ref={div => (this.img5 = div)}
          />

          {/* ======================== Graduation Slide ======================== */}
          <img
            className="nxt_carousel-img"
            src={GraduationBg}
            alt="GraduationBg"
            ref={div => (this.bg6 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={GraduationMain}
            alt="GraduationMain"
            ref={div => (this.img6 = div)}
          />

          {/* ======================== Family Slide ======================== */}
          <img
            className="nxt_carousel-img"
            src={FamilyBg}
            alt="FamilyBg"
            ref={div => (this.bg7 = div)}
          />
          <img
            className="nxt_carousel-img-main"
            src={FamilyMain}
            alt="FamilyMain"
            ref={div => (this.img7 = div)}
          />

          {/* ======================== Body ======================== */}
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
