import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Button} from 'react-bootstrap';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
      <Jumbotron>
  <h1>Hello, world!</h1>
  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <p><Button bsStyle="primary">Learn more</Button></p>
</Jumbotron>
      </div>
    );
  }
}

export default Menu;
