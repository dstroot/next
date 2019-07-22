import React from 'react';
import './styles.scss';

class Card extends React.Component {
  render() {
    return (
      <div className="card h-100" ref={this.props.reference}>
        <div className="card-body py-4">
          <img src={this.props.img} alt="Evergreen" className="mb-3" />
          <div className="card-title nxt_heading-small mb-4">
            {this.props.title}
          </div>
          <div className="card-text circular mb-5">{this.props.content}</div>
          <div>{this.props.button}</div>
        </div>
      </div>
    );
  }
}

export default Card;
