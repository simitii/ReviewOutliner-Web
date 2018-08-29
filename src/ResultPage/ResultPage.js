import React from 'react';
import './ResultPage.css';

import Product from './Product/Product.js';


class ResultPage extends React.Component {

  render() {

    return (
      <div>
        
        <Product product={this.props.product} />
      </div>
    );
  }
}

export default ResultPage;
