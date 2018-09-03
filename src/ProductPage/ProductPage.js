import React, { Component } from 'react';
import './ProductPage.css';
import axios from 'axios';

import Block from './Block/Block.js';
import Brief from './Brief/Brief.js';
import Path from '../Path/Path.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';

class ProductPage extends Component {

  constructor(props){
    super(props);
    this.state ={
      isReady: true,
      pageProduct: null
    }
  }
  componentDidMount() {

    axios.post(`http://localhost:3001/get_product`, this.state.id)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const arr = res.data;
        this.setState({
          pageProduct:arr,
        });
      })
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
