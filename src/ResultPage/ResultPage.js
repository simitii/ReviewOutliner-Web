import React from 'react';
import './ResultPage.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {DOMAIN} from '../constants.js';

import Product from './Product/Product.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';
import Logo from '../Logo/Logo.js';
import Search from '../Search/Search.js';

class ResultPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isReady : false,
      onTime : false,
      productArray: []
    }
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({onTime:true}),750);
    axios.post(DOMAIN + '/search', {query:this.props.search})
      .then(res => {
        this.setState({
          productArray:res.data,
          isReady:true
        });
      })
      .catch((e) => {
        if(!e.response){
          this.props.history.replace('/error=503/Service Unavailable')
        }else{
          this.props.history.replace('/error='+e.response.status+'/'+e.response.statusText)
        }
      });
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
          <Search/>
          {this.state.productArray.map((product,index)=>
            <Product product={product} key={index} />
          )}

        </div>
      );
    }


  }
}

export default withRouter(ResultPage);
