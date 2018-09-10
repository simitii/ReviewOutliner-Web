import React from 'react';
import './SearchPage.css';

import Search from '../Search/Search.js';
import Motto from './Motto/motto.js'

class SearchPage extends React.Component {

  render() {

    return (
      <div>

        <Motto motto={this.props.motto}/>
        <Search/>

      </div>
    );
  }
}

export default SearchPage;
