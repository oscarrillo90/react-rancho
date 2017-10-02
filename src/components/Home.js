import React, { Component } from 'react';
import {Jumbotron, Button, Image} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="Home">

      <Jumbotron className="home-jumbo">
    <h1 className="animated fadeInDown">Hey, wanna eat something?</h1>
  </Jumbotron>

      </div>
    );
  }
}

export default Home;
