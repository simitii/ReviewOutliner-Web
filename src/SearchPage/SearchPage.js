import React, { Component } from 'react';
import './SearchPage.css';

import Search from './Search/Search.js';
import Motto from './Motto/motto.js'

class SearchPage extends React.Component {

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
      <div>

        <Motto motto='Simple Decision Maker'/>
        <Search/>

      </div>
    );
  }
}

export default SearchPage;
