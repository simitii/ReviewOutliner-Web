import React from 'react';
import DataCacher from '../DataCacher.js';
import './ResultPage.css';
import {POST} from '../Request.js';
import {withRouter} from 'react-router-dom';


import Product from './Product/Product.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js';

class ResultPage extends DataCacher{

  constructor(props){
    super(props);
    this.state = {
      isReady : false,
      onTime : false,
      productArray: []
    }
  }

  post(query) {
    this.timeout = setTimeout(() => this.setState({onTime:true}),750);
    POST('/search', {query}, this.props.history)
    .then((res) => {
      this.setState({
        productArray:res.data,
        isReady:true
      });
    });
  }

  propsChanged(nextProps){
    this.post(nextProps.search);
    this.setState({
      isReady : false,
      onTime : false,
      productArray: []});
  }
  propsInitialized(){
    this.post(this.props.search);
  }

  componentWillUnmount(){
    clearTimeout(this.timeout);
  }

  render() {
    if(!this.state.isReady || !this.state.onTime){
      return (
        <LoadingPage/>
      );
    }else {
      return (
        <div>
          <Logo/>
          <Search {...this.subComponentStateFactory("Search")} />
          {this.state.productArray.map((product,index)=>
            <Product product={product} key={index} keyword={this.state.search}/>
          )}

        </div>
      );
    }


  }
}

export default withRouter(ResultPage);
