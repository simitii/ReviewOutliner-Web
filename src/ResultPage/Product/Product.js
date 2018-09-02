import React, {Component} from 'react';
import './Product.css';

import Path from '../../Path/Path.js';

class Product extends Component {

  toProduct(){
    window.location.replace('/product='+this.props.product.name+':'+this.props.product.id)
  }

  render(){
    return (
      <div className="ProductBlock">
        <img id="resultImg" src={this.props.product.image_url} alt="resImg"/>
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.short_description}</p>
        <Path path={this.props.product.category_path}/>
        <button
          onClick={() => (this.toProduct())}>
          GoProduct
        </button>

      </div>
    );
  }
}

export default Product;
