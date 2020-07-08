import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../App.css';

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/closet">Closet</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;