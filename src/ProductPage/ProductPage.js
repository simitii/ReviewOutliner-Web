import React, { Component } from 'react';
import './ProductPage.css';

import Block from './Block/Block.js';


class ProductPage extends React.Component {

  render() {
    var product = {
      "id": "B072C4KCQH",
      "name": "Echo Buttons",
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
      "short_description": "cool",
      "price": -1,
      "score": -1,
      "positive_arguments": [],
      "negative_arguments": [],
      "neutral_arguments": []
    }
    return (
      <div>

        <Block/>

      </div>
    );
  }
}

export default ProductPage;
