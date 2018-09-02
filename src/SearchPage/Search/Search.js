import React, { Component } from 'react';
import './Search.css';
import {Link} from 'react-router-dom'


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


    render(){
        return(
            <div className="search-button">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <input
                  type="text"
                  onChange={(event) => (this.updateSearch(event.target.value))}
                  value={this.state.search}/>
                <Link
                  type="button"
                  className="fa fa-search"
                  to={'/search='+ this.state.search}>
                </Link>
            </div>

        );
    }
}
export default Search;
