import React, { Component } from 'react';
import ClimbList from './components/climb-list/climb-list'
import Nav from './components/elements/nav';
import Footer from './components/elements/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <ClimbList />
        <Footer />
      </div>);
  }
}

export default App;
