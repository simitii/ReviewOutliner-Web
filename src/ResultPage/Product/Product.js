import React, {Component} from 'react';
import './Product.css';


class Product extends Component {
  render(){
    return (
      <div>
        <p>{this.props.product}</p>
      </div>
    );
  }
}

export default Product;
