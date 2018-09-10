import React from 'react';
import './Search.css';
import {Link} from 'react-router-dom';
import logo from '../common/search.svg';


class Search extends React.Component{
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


                <input
                  type="text"
                  onChange={(event) => (this.updateSearch(event.target.value))}
                  value={this.state.search}/>
                <Link
                  type="button"
                  to={'/search='+ this.state.search}>
                    <img  id='search-solid' alt='load' src={logo}/>
                </Link>
            </div>

        );
    }
}
export default Search;
