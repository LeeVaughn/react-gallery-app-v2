import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="/surfing">Surfing</NavLink></li>
      <li><NavLink to="/skiing">Skiing</NavLink></li>
      <li><NavLink to="/golf">Golf</NavLink></li>
    </ul>
  </nav>
);

export default Nav;
