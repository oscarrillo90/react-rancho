import React, { Component } from 'react';


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="menu-overlay">
          <div className="menu-text responsive" style={{display: 'flex', justifyContent: 'center'}} >
            <p className="animated fadeInDown responsive">Come back soon to see the finished website!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
