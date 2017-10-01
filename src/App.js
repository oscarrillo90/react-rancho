import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

        <Navbar inverse collapseOnSelect>
<Navbar.Header>
<Navbar.Brand>
<a href="#">React-Bootstrap</a>
</Navbar.Brand>
<Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
<Nav>
<LinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
<LinkContainer to="/Header"><NavItem eventKey={2}>Header</NavItem></LinkContainer>
<LinkContainer to="/About"><NavItem eventKey={3}>About</NavItem></LinkContainer>
</Nav>
<Nav pullRight>
<NavItem eventKey={1} href="#">Link Right</NavItem>
<NavItem eventKey={2} href="#">Link Right</NavItem>
</Nav>
</Navbar.Collapse>
</Navbar>

          <Route exact path="/" component={Home} />
          <Route path="/Header" component={Header} />
          <Route path="/About" component={About} />






        </div>

      </Router>



    );
  }
}

export default App;
