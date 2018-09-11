import React from 'react';
import './Search.css';
import {Link} from 'react-router-dom';
import logo from '../common/search.svg';


class Search extends React.Component{
    

    updateSearch(searchState){
      this.props.setState({
        search:searchState,
      });
    }


    render(){
      let search = ''
      if(this.props.state){
        search =this.props.state.search;
      }
        return(
            <div className="search-button">


                <input
                  type="text"
                  onChange={(event) => (this.updateSearch(event.target.value))}
                  value={search}/>
                <Link
                  type="button"
                  to={'/search='+ search}>
                    <img  id='search-solid' alt='load' src={logo}/>
                </Link>
            </div>

        );
    }
}
export default Search;
