import React, { Component } from 'react';
import logo from './logo.svg';
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
      "price": -1,
      "score": -1,
      "positive_arguments": [],
      "negative_arguments": [],
      "neutral_arguments": []
    }
    return (
      <div className="Main">
        <SearchPage motto='Simple Decision Maker'/>
        <ResultPage/>
        <ProductPage/>


      </div>
    );
  }
}

export default App;
