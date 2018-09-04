import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import SearchPage from './SearchPage/SearchPage.js';
import ResultPage from './ResultPage/ResultPage.js';
import ProductPage from './ProductPage/ProductPage.js';
import LoadingPage from './LoadingPage/LoadingPage.js';

class App extends React.Component {


  render() {


    return (
      <div className="Main">
        <Switch>

          <Route
            exact
            path="/"
            render={() => (<SearchPage motto="Every Simple Decision depends on us:)"/>)}/>

          <Route
            path="/search=:search"
            render={({match}) =>(<ResultPage search={match.params.search} />)}/>
          <Route
            path="/product=:id/:name"
            render={({match}) =>(<ProductPage id={match.params.id}/>)}/>

          <Route
            render={()=>(<LoadingPage/>)}/>

        </Switch>

      </div>
    );
  }
}

export default App;
