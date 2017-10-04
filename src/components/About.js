import React, { Component } from 'react';

import {Jumbotron, Button} from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div className="About">
      <Jumbotron>
          <h1>Work in Progess!</h1>
          <p>Come back in the near future, also this page will have all the about info</p>
          <p><Button bsStyle="primary">yay!</Button></p>
        </Jumbotron>
    </div>
    );
  }
}

export default About;
