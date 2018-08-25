import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ms: {cd:"ol"},
    };
  }
  render() {
    
    return (
      <h2> {this.state.ms.cd} </h2>
      <Search props={}>
    );
  }
}

export default App;
