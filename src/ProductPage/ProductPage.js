import React, { Component } from 'react';
import './ProductPage.css';
import axios from 'axios';
import {DOMAIN} from '../constants.js';
import {withRouter} from 'react-router-dom';

import Block from './Block/Block.js';
import Brief from './Brief/Brief.js';
import Path from '../Path/Path.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';
import CustomImage from '../CustomImage/CustomImage.js';

class ProductPage extends Component {

  constructor(props){
    super(props);
    this.state ={
      isReady: false,
      pageProduct: null
    }
  }
  componentDidMount() {

    axios.post( DOMAIN + '/get_product', {product_id:this.props.id})
      .then(res => {
        this.setState({
          pageProduct:res.data,
          isReady:true
        });
      })
      .catch((e) => this.props.history.replace('/error='+e.response.status+'/'+e.response.statusText));
  }

  render() {


    if(!this.state.isReady){
      return (<LoadingPage/>);
    }else {

      const briefProduct = {
        "name": this.state.pageProduct.name,
        "short_description": this.state.pageProduct.short_description,
        "score": this.state.pageProduct.score,
      }

      return (
        <div>

          <Path path={this.state.pageProduct.category_path}/>
          <CustomImage id="productImg" src={this.state.pageProduct.image_url}alt="proImg"/>
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

export default withRouter(ProductPage);
