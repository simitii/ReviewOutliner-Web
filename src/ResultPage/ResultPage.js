import React from 'react';
import './ResultPage.css';

import Product from './Product/Product.js';
import LoadingPage from '../LoadingPage/LoadingPage.js';

class ResultPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isReady : true,
      productArray: [
        {
          "id": "B072C4KCQH",
          "name": "Echo Buttons (2 Buttons Per Pack)",
          "image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
          "product_url":"https://www.amazon.com/Echo-Buttons-2-Pack/dp/B072C4KCQH",
          "short_description": "cool",
          "category_path": "./review/review2/review3",
          "price": -1,
          "score": -1,
          "positive_arguments": ["positive","poive"],
          "negative_arguments": ["negative", "ga"],
          "neutral_arguments": ["neutral","tra"]
        },
        {
          "id": "B072C4KCQH",
          "name": "adem",
          "image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
          "product_url":"https://www.amazon.com/Echo-Buttons-2-Pack/dp/B072C4KCQH",
          "short_description": "cool",
          "category_path": "./review/review2/review3",
          "price": -1,
          "score": -1,
          "positive_arguments": ["positive","poive"],
          "negative_arguments": ["negative", "ga"],
          "neutral_arguments": ["neutral","tra"]
        }
      ]
    }
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
