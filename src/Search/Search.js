import React from 'react';
import './Search.css';
import {Link} from 'react-router-dom';
import logo from '../common/search.svg';


class Search extends React.Component{
    constructor(props){
      super(props);
      if(this.props.keyword){
        this.props.initState({search:this.props.keyword});
      }else {
        this.props.initState({search:''});
      }

    }

    updateSearch(searchState){
      this.props.setState({
        search:searchState,
      });
    }


    render(){
      let state = this.props.getState();
        return(
            <div className="search-button">


                <input
                  type="text"
                  onChange={(event) => (this.updateSearch(event.target.value))}
                  value={state.search}/>
                <Link
                  type="button"
                  to={'/search='+ state.search}>
                    <img  id='search-solid' alt='load' src={logo}/>
                </Link>
            </div>

        );
    }
}
export default Search;
