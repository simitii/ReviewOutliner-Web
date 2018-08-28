import React, { Component } from 'react';
import './ProductPage.css';

import Block from './Block/Block.js';
import Redirect from './Redirect/Redirect.js';

class ProductPage extends Component {

  render() {

    return (
      <div>
        <img id="productImg" src={this.props.product.image_url}alt="proImg"/>
        <Block comment={this.props.positive_arguments} genre="Pros"/>
        <Block comment={this.props.negative_arguments} genre="Cons"/>
        <Block comment={this.props.neutral_arguments} genre="neutral"/>
        <Redirect/>

      </div>
    );
  }
}

export default ProductPage;
