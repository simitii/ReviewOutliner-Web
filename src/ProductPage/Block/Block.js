import React, {Component} from 'react';
import './Block.css';

class Block extends Component {
  //var comment = this.props.comment;
  render (){
    return (
      <div>
        <h2>{this.props.genre}</h2>
        <ul>
          {[1,23,34].map((element) =>
            <li key={element}>
            {element}
            </li>
          )}
        </ul>

        <p>trial block</p>
      </div>
    );
  }
}
export default Block;
