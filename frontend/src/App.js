import React, { Component } from 'react';
import ClimbList from './components/climb-list/climb-list'
import Nav from './components/elements/nav';
import Footer from './components/elements/footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.getClimbs = this.getClimbs.bind(this);

    this.state = { climbs: [] };
  }

  getClimbs() {
    fetch("https://goclimbing.to/api/v1/Climbs")
      .then(response => response.json())
      .then(data => {
        this.setState({ climbs: data });
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  componentDidMount() {
    this.getClimbs();
  }

  render() {
    return (
      <div>
        <Nav />
        <ClimbList climbs={this.state.climbs} />
        <Footer />
      </div>);
  }
}

export default App;
