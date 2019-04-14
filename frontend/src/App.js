import React, { Component } from 'react';
import ClimbList from './climb-list/climb-list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="section">
          <div className="container has-text-centered">
            <h1 className="title is-1">Go Climbing To</h1>
          </div>
        </header>
        <ClimbList />
      </div>);
  }
}

export default App;
