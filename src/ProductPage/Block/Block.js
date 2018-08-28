import React, {Component} from 'react';
import './Block.css';

class Block extends Component {

  render (){
    return (
      <div>
        <h2>{this.props.genre}</h2>
        <p>{this.props.comment}</p>
        <p>trial block</p>
      </div>
    );
  }
}
export default Block;
