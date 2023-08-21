import React from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import hamburger from '../assets/hamburger.svg';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="NavbarContainer">
    <ul>
      <li className="LogoContainer">
        <img src={logo} alt="Logo" />
        <h3>Marketeq</h3>
      </li>
      <li className="SearchAndHamburger">
        <img src={hamburger} alt="hamburger icon" />
        <img src={search} alt="search icon" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
