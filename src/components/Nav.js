import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  search(query) {
    this.props.performSearch(query)
  }


  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/surfing" onClick={ () => this.search("surfing") }>Surfing</NavLink></li>
          <li><NavLink to="/skiing" onClick={ () => this.search("skiing") }>Skiing</NavLink></li>
          <li><NavLink to="/skateboarding" onClick={ () => this.search("skateboarding") }>Skateboarding</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
