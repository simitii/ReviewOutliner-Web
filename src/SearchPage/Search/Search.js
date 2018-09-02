import React, { Component } from 'react';
import './Search.css';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';

class Search extends Component{
    constructor (props){
      super(props);
      this.state = {
        search:'',
      };
    }

    updateSearch(searchState){
      this.setState({
        search:searchState,
      });
    }

    submit(){
      window.location.replace('/search='+ this.state.search);
    }


    render(){
        return(
            <div className="search-button">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <input
                  type="text"
                  onChange={(event) => (this.updateSearch(event.target.value))}
                  value={this.state.search}/>
                <button
                  type="button"
                  onClick={() => (this.submit())}
                  className="fa fa-search">
                </button>

            </div>

        );
    }
}
export default Search;
