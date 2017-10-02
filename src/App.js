import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar collapseOnSelect fixedTop className="navbar">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">Rancho Grande</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <LinkContainer to="/"><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                <LinkContainer to="/Menu"><NavItem eventKey={2}>Menu</NavItem></LinkContainer>
                <LinkContainer to="/About"><NavItem eventKey={3}>About</NavItem></LinkContainer>
                <LinkContainer to="/Contact"><NavItem eventKey={4}>Contact</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        <Route exact path="/" component={Home} />
        <Route path="/Menu" component={Menu} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Footer />

        </div>

      </Router>
    );
  }
}

export default App;
