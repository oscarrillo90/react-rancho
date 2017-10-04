import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-overlay">
          <div className="home-text responsive" style={{display: 'flex', justifyContent: 'center'}} >
            <p className="animated fadeInDown responsive">Hey, wanna eat something?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
