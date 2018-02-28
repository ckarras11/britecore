import React from 'react';
import logo from '../logo.png';

const Nav = () => (
  <nav className="navbar">
    <span><img className="logo" src={logo} alt="britecore logo" />BriteCore</span>
    <ul className="nav-links">
      <li>Policies</li>
      <li>Claims</li>
      <li>Contacts</li>
      <li>Data</li>
      <li>Lines</li>
      <li>All Modules</li>
    </ul>
  </nav>
);

export default Nav;
