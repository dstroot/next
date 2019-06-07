import React from 'react';

// styles
import './styles.scss';

const SectionHero = props => {
  return (
    <div className="background" style={props.backgroundImage}>
      <div className="divText">
        <div className="container">
          <div className="row">
            <div className="col text-center">{props.heading}</div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <p className="mt-4 circular">{props.content}</p>
              {props.linkElement}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
