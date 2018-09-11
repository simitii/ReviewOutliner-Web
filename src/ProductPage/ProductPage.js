import React from 'react';
import './ProductPage.css';
import {POST} from '../Request.js';
import {withRouter} from 'react-router-dom';
import DataCacher from '../DataCacher.js';

import Block from './Block/Block.js';
import Brief from './Brief/Brief.js';
import Path from '../Path/Path.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';
import CustomImage from '../CustomImage/CustomImage.js';
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js';

class ProductPage extends DataCacher {

  constructor(props){
    super(props);
    this.state ={
      isReady: false,
      onTime : false,
      pageProduct: null
    }
  }
  post(product_id) {
    this.timeout = setTimeout(() => this.setState({onTime:true}),750);
    POST('/get_product', {product_id})
    .then((res) => {
      this.setState({
        pageProduct:res.data,
        isReady:true
      });
    });
  }

  propsChanged(nextProps){
    this.post(nextProps.id);
    this.setState({
      isReady: false,
      onTime : false,
      pageProduct: null});
  }
  propsInitialized(){
    this.post(this.props.id);
  }
  componentWillUnmount(){
    clearTimeout(this.timeout);
  }

  render() {


    if(!this.state.isReady || !this.state.onTime){
      return (<LoadingPage/>);
    }else {

      const briefProduct = {
        "name": this.state.pageProduct.name,
        "short_description": this.state.pageProduct.short_description,
        "score": this.state.pageProduct.score,
      }

      return (
        <div>
          <Logo/>
          <Search setState={this.subComponentStateSetterFactory("Search").bind(this)} state={this.state["Search"]}/>
          <Path path={this.state.pageProduct.category_path}/>
          <CustomImage id="productImg" src={this.state.pageProduct.image_url} alt="product"/>
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
