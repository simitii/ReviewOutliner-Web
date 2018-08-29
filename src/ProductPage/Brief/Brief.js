import React, {Component} from 'react';
import './Brief.css';

class Brief extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.product.name}</h2>
        <h3>{this.props.product.score}</h3>
        <p>{this.props.product.short_description}</p>
      </div>
    );
  }
}
export default Brief;
