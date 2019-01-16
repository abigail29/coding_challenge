import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'
import WrapperContainer from './containers/WrapperContainer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={WrapperContainer} />
        </Route>
      </Router>
    );
  }
}

export default App;
