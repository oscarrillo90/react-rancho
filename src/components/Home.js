import React, { Component } from 'react';
import {Jumbotron, Button, Image} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="Home">

      <Jumbotron className="home-jumbo">
        <p responsive style={{display: 'flex', justifyContent: 'center'}} className="animated fadeInDown home-text">Hey, wanna eat something?</p>
      </Jumbotron>

      </div>
    );
  }
}

export default Home;
