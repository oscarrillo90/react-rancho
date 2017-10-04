import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
      <div className="menu-overlay">
      <div style={{display: 'flex', justifyContent: 'center'}} className="menu-text">
      <h1 className="animated fadeInDown">Hello</h1>
      </div>
      </div>
      </div>
    );
  }
}

export default Menu;
