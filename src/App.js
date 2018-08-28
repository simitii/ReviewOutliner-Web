import React from 'react';
//import logo from './logo.svg';
import './App.css';

import SearchPage from './SearchPage/SearchPage.js';
import ResultPage from './ResultPage/ResultPage.js';
import ProductPage from './ProductPage/ProductPage.js';


class App extends React.Component {

  render() {
    var product = {
      "id": "B072C4KCQH",
      "name": "Echo Buttons (2 Buttons Per Pack)",
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/61GquaDrMWL._SY355_.jpg",
      "short_description": "cool",
      "category_path": "./review/review2/review3",
      "price": -1,
      "score": -1,
      "positive_arguments": ["positive"],
      "negative_arguments": ["negative"],
      "neutral_arguments": ["neutral"]
    }
    var resultProduct = {
      "name": product.name,
      "image_url": product.image_url,
      "short_description": product.short_description,
      "category_path": product.category_path
    }
    var pageProduct = {
      "name": product.name,
      "image_url": product.image_url,
      "score": product.score,
      "positive_arguments": product.positive_arguments,
      "negative_arguments": product.negative_arguments,
      "neutral_arguments": product.neutral_arguments
    }


    return (
      <div className="Main">
        <SearchPage motto="Every Simple Decision depends on us:)"/>
        <ResultPage product={resultProduct}/>
        <ProductPage product={pageProduct}/>


      </div>
    );
  }
}

export default App;
