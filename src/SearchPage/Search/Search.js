import React, { Component } from 'react';
import './Search.css';


class Search extends Component{
    render(){
        return(
            <div className="search-button">
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

              <form>
                <input type="text"/>
                <button type="button"><div className="fa fa-search"></div></button>
              </form>

            </div>

        );
    }
}
export default Search;
