import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import linksData from './main-nav-data';
import MainNav from './components/MainNav';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    this.setState({ links: linksData });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <MainNav {...props} linksList={this.state.links}/>} /> {/* no need for 'exact' prop */}
      </div>
    );
  }
}

export default App;
