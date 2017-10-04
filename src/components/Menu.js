import React, { Component } from 'react';


class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="menu-overlay">
          <div className="menu-text responsive" style={{display: 'flex', justifyContent: 'center'}} >
            <h1 className="animated fadeInDown responsive">Hello</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
