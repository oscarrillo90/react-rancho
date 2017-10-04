import React, { Component } from 'react';
import {} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-overlay">
         <div className="home-text-box animated fadeInDown" style={{display: 'flex', justifyContent: 'center'}} >
          Hey, wanna eat something?
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
