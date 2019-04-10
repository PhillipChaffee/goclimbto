import React, { Component } from 'react';
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
        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="column is-4">
                <div class="control has-icons-left has-icons-right">
                  <input class="input" type="search" placeholder="Find a climb" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                  </span>
                </div>
              </div>
              <div class="column is-1 is-offset-7">
                <a class="button is-pulled-right">+</a>
              </div>
            </div>
            <div id="climbs"></div>
          </div>
        </section>
      </div>);
  }
}

export default App;
