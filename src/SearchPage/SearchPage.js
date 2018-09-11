import React from 'react';
import './SearchPage.css';
import DataCacher from '../DataCacher.js';

import Search from '../Search/Search.js';
import Motto from './Motto/motto.js'

class SearchPage extends DataCacher {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    console.log(this.state);
    return (
      <div>

        <Motto motto={this.props.motto}/>
        <Search {...this.subComponentStateFactory("Search")} />
      </div>
    );
  }
}

export default SearchPage;
