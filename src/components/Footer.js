import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">

      <Navbar className="footer" style={{display: 'flex', justifyContent: 'center'}}>
          <Navbar.Header>
            <Navbar.Brand>
              <p style={{display: 'flex', justifyContent: 'center'}}><span role="img">©️</span> 2017 Copyright: Rancho Grande</p>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

      </div>
    );
  }
}

export default Footer;
