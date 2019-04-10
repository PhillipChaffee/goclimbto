import React, { Component } from 'react';
import ClimbList from './climb-list/climb-list'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section class="section">
          <div class="container has-text-centered">
            <h1 class="title is-1">Go Climbing To</h1>
          </div>
        </section>
        <ClimbList />
      </div>);
  }
}

export default App;
