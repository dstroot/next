import React from 'react';

// styles
import './styles.scss';

const SectionHero = props => {
  return (
    <div className="background" style={props.backgroundImage}>
      <div className="divText">
        <div className="container">
          <div className="row">
            <div className="col text-center mt-6">
              <h1 className="nxt_heading-large mt-5">{props.heading}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <p className="mt-4">{props.content}</p>
              {props.linkElement}
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className="hero-image"
        src={props.heroImage}
        alt={props.heroImageAlt}
      /> */}
    </div>
  );
};

export default SectionHero;
