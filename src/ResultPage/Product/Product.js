import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';

import CustomImage from '../../CustomImage/CustomImage.js';

import Path from '../../Path/Path.js';

class Product extends React.Component {


  render(){
    return (
      <div className="ProductBlock">
        <CustomImage id="resultImg" src={this.props.product.image_url} alt="result" />
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.short_description}</p>
        <Path path={this.props.product.category_path}/>
        <Link
          type="button"
          to={'/product='+this.props.product.id+'/'+this.props.product.name+'/'+this.props.keyword}>
          GoProduct
        </Link>

      </div>
    );
  }
}

export default Product;
