import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

import logo from '../logo.svg';
import './App.css';
import NewsList from '../NewsList/NewsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <NewsList/>
        </div>
      </div>
    );
  }
}

export default App;
