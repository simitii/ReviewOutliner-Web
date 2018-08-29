import React, { Component } from 'react';
import './ProductPage.css';

import Block from './Block/Block.js';
import Redirect from './Redirect/Redirect.js';
import Brief from './Brief/Brief.js';
import Path from '../Path/Path.js';

class ProductPage extends Component {



  render() {
    var briefProduct = {
      "name": this.props.product.name,
      "short_description": this.props.product.short_description,
      "score": this.props.product.score,
    }

    return (
      <div>

        <Path path={this.props.product.category_path}/>
        <img id="productImg" src={this.props.product.image_url}alt="proImg"/>
        <Brief product={briefProduct}/>
        <Block comment={this.props.product.positive_arguments} genre="Pros"/>
        <Block comment={this.props.product.negative_arguments} genre="Cons"/>
        <Block comment={this.props.product.neutral_arguments} genre="neutral"/>
        <Redirect/>

      </div>
    );
  }
}

export default ProductPage;
