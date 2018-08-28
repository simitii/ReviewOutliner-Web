import React from 'react';
import './ResultPage.css';

import Product from './Product/Product.js';
import Path from './Path/Path.js';

class ResultPage extends React.Component {

  render() {

    return (
      <div>
        <Path path={this.props.category_path}/>
        <Product product={this.props.product} />

      </div>
    );
  }
}

export default ResultPage;
