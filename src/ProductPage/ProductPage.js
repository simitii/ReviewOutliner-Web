import React, { Component } from 'react';
import './ProductPage.css';

import Block from './Block/Block.js';
import Redirect from './Redirect/Redirect.js';
import Brief from './Brief/Brief.js';
import Path from '../Path/Path.js';

class ProductPage extends Component {

  toWebSite(){

  }

  render() {

    var pageProduct = {
      "id": "B072C4KCQH",
      "name": "Echo Buttons (2 Buttons Per Pack)",
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
      "product_url":"https://www.amazon.com/Echo-Buttons-2-Pack/dp/B072C4KCQH",
      "short_description": "cool",
      "category_path": "./review/review2/review3",
      "price": -1,
      "score": -1,
      "positive_arguments": ["positive","poive"],
      "negative_arguments": ["negative", "ga"],
      "neutral_arguments": ["neutral","tra"]
    }
    var briefProduct = {
      "name": pageProduct.name,
      "short_description": pageProduct.short_description,
      "score": pageProduct.score,
    }

    return (
      <div>

        <Path path={pageProduct.category_path}/>
        <img id="productImg" src={pageProduct.image_url}alt="proImg"/>
        <Brief product={briefProduct}/>
        <Block comment={pageProduct.positive_arguments} genre="Pros"/>
        <Block comment={pageProduct.negative_arguments} genre="Cons"/>
        <Block comment={pageProduct.neutral_arguments} genre="neutral"/>
        <button
          onClick={() => (window.location.replace(pageProduct.product_url))}>
          goAmazon
        </button>

      </div>
    );
  }
}

export default ProductPage;
