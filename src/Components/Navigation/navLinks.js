import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navLinks.module.css';


const NavLinks = props => {


  return (
    <ul className={classes.nav_links}>

      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/services">Services</NavLink>
      </li>

      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>

      <li>
        <NavLink to="/team">team</NavLink>
      </li>

      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>

      <li className={classes.link_drop_down}>
        <NavLink to="/drop-down">Drop down</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      <li className={classes.link_get_started}>
        <NavLink to="/get-started">Get started</NavLink>
      </li>
      
    </ul>
  )
};

export default NavLinks;