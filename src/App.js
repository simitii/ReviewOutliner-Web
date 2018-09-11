import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';

import SearchPage from './SearchPage/SearchPage.js';
import ResultPage from './ResultPage/ResultPage.js';
import ProductPage from './ProductPage/ProductPage.js';
import ErrorPage from './ErrorPage/ErrorPage.js';


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
            path="/search="
            render={({match}) =>(<SearchPage motto="Every Simple Decision depends on us:)"/>)}/>
          <Route
            path="/search=:search"
            render={({match}) =>(<ResultPage search={match.params.search} />)}/>

          <Route
            path="/product=:id/:name/:keyword"
            render={({match}) =>(<div>
              <p>{match.params.keyword}</p>
              <ProductPage id={match.params.id}
                           keyword={match.params.keyword}/>
              </div>)}/>

          <Route
            path="/product=:id/:name"
            render={({match}) =>(<ProductPage id={match.params.id}/>)}/>


          <Route
            path='/error=:statusCode/:statusText'
            render={({match})=>(
              <ErrorPage statusCode={match.params.statusCode}
                         statusText={match.params.statusText}/>
              )}/>
          <Route
            render={()=>(
              <ErrorPage statusCode='404'
                         statusText='Not Found'/>
             )}/>

        </Switch>

      </div>
    );
  }
}

export default App;
