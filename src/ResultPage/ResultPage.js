import React, { Component } from 'react';
import './ResultPage.css';

import Product from './Product/Product.js';


class ResultPage extends React.Component {

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

        <Product/>

      </div>
    );
  }
}

export default ResultPage;
