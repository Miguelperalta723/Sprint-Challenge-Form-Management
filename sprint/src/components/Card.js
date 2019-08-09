import React from 'react';

class Card extends React.Component {



  render() {
    return (
        <div className='userCard'>
            <h3>{this.props.name}</h3>
            <p>{this.props.course}</p>
            <p>{this.props.technique}</p>
      </div>
    );
  }
}

export default Card;