import React from 'react';
import './ResultPage.css';
import axios from 'axios';
import {DOMAIN} from '../constants.js';

import Product from './Product/Product.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';

class ResultPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isReady : false,
      productArray: []
    }
  }

  componentDidMount() {
    axios.post(DOMAIN + '/search', {query:this.props.search})
      .then(res => {
        this.setState({
          productArray:res.data,
          isReady:true
        });
      })
      .catch((e) => console.log( e.response));
  }


  render() {
    if(!this.state.isReady){
      return (
        <LoadingPage/>
      );
    }else {
      return (
        <div>
          {this.state.productArray.map((product,index)=>
            <Product product={product} key={index} />
          )}

        </div>
      );
    }


  }
}

export default ResultPage;
