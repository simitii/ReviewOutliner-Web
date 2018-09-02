import React, {Component} from 'react';
import './Product.css';
import {Link} from 'react-router-dom';

import Path from '../../Path/Path.js';

class Product extends Component {


  render(){
    return (
      <div className="ProductBlock">
        <img id="resultImg" src={this.props.product.image_url} alt="resImg"/>
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.short_description}</p>
        <Path path={this.props.product.category_path}/>
        <Link
          type="button"
          to={'/product='+this.props.product.id+'/'+this.props.product.name}>
          GoProduct
        </Link>

      </div>
    );
  }
}

export default Product;
