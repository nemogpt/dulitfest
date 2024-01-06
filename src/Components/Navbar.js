import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
       <h2>DU LitFest</h2>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/speakers">Speakers</NavLink>
            </li>
            <li>
            <NavLink to="/sponsors">Sponsors</NavLink>
          </li>
            <li>
              <NavLink to="/program">Programme</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/register"><button>Register</button> </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
