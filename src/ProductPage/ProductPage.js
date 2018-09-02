import React, { Component } from 'react';
import './ProductPage.css';


import Block from './Block/Block.js';
import Brief from './Brief/Brief.js';
import Path from '../Path/Path.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';

class ProductPage extends Component {

  constructor(props){
    super(props);
    this.state ={
      isReady: true,
      pageProduct: {
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
    }
  }

  render() {
    const briefProduct = {
      "name": this.state.pageProduct.name,
      "short_description": this.state.pageProduct.short_description,
      "score": this.state.pageProduct.score,
    }

    if(!this.state.isReady){
      return (<LoadingPage/>);
    }else {
      return (
        <div>

          <Path path={this.state.pageProduct.category_path}/>
          <img id="productImg" src={this.state.pageProduct.image_url}alt="proImg"/>
          <Brief product={briefProduct}/>
          <Block comment={this.state.pageProduct.positive_arguments} genre="Pros"/>
          <Block comment={this.state.pageProduct.negative_arguments} genre="Cons"/>
          <Block comment={this.state.pageProduct.neutral_arguments} genre="neutral"/>
          <a href={this.state.pageProduct.product_url}>
            <button>
              goAmazon
            </button>
          </a>

        </div>
      );
    }

  }
}

export default ProductPage;
