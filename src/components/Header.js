import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      <h1>Welcome to Dentist Office</h1>
      <p>
        Here at Dentist Office we're committed to taking care of all your
        dental needs. Check out our contact page to see where we're located
        and find our phone number and email address. Check out our procedures
        page to find out what sort of dental work you can get done today.
      </p>

      <p>
        Thanks for stopping by. And remember, here at Dentist Office we make
        sure you always leave with a smile!
      </p>
      </div>
    );
  }
}

export default Header;
