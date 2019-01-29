import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainNav from './components/MainNav';
import links from './main-nav-data';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      links: []
    }
  }

  componentDidMount() {
    this.setState({ links: links });
  }
  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <MainNav {...props} linksList={this.state.links}/>} />
      </div>
    );
  }
}

export default App;
