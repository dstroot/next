import React from 'react';

// animation
import { TweenMax, TimelineMax } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

//compnent
import Card from '../../../Card';
import SectionOneColumn from '..';
import Button from '../../../Buttons/Button';

// images
import Tree from '../../../Card/media/evergreen.svg';
import Mountains from '../../../Card/media/mountains.svg';

class SectionFirstProduct extends React.Component {
  constructor(props) {
    super(props);

    // GSAP
    this.cardTl = new TimelineMax();
    this.cards = [];

    // ScrollMagic
    this.controller = new ScrollMagic.Controller();
  }

  componentDidMount() {
    // GSAP Timeline
    this.cardTl.staggerFrom(
      this.cards,
      0.5,
      {
        scale: 0,
      },
      0.1
    );
    // ScrollMagic
    new ScrollMagic.Scene({
      triggerElement: '#cardScrollStarts',
      // triggerHook: 0.65,
    })
      .setTween(this.cardTl)
      .addIndicators() // for debugging
      .addTo(this.controller);
  }

  render() {
    return (
      <SectionOneColumn
        styleBackground="bg-light"
        heading="Introducing our first product"
        noFadeContent={
          // MAYBE PASS IN CARD-DECK DIV CONTAINING ALL CARDS, THEREFOR WE CAN CONTROL STAGGER ANIMATION AND STYLING?
          <div class="card-deck">
            <Card
              img={Mountains}
              title="Next Term Life"
              content={
                <>
                  <p>
                    Help keep your loved ones protected with coverage that
                    adapts with your life’s biggest moments.
                  </p>
                  <br />
                  <p>
                    <strong>Coming Soon! </strong>
                  </p>
                </>
              }
            />

            <Card
              img={Tree}
              title="Next Deferred Income Annuity"
              content="Create a future income stream you can count on for the rest of your life by saving over time."
              button={
                <Button
                  path="/nextdeferredincomeannuity"
                  buttonText="Learn More"
                />
              }
            />
          </div>
        }
      />
    );
  }
}

export default SectionFirstProduct;
