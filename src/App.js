import React, { Component } from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>{' '}
            <Link to="/Header">Header</Link>{' '}
            <Link to="/About">About</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/Header" component={Header} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
