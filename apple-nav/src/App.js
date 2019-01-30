import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import linksData from './main-nav-data';
import MainNav from './components/MainNav';
import SubNav from './components/SubNav';

import './normalize.css';


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
      <GlobalStyles>
        <Route path="/" render={props => <MainNav {...props} linksList={this.state.links}/>} />
        <Route path="/:product/" component={ SubNav } />
      </GlobalStyles>
    );
  }
}

export default App;
