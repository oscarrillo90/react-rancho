import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">

      <Navbar className="footer">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Rancho Grande</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

      </div>
    );
  }
}

export default Footer;
