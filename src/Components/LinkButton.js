import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './LinkButton.module.css';


const LinkButton = ({title}) => {
  return (
    <div className={classes.button}>
      <NavLink to="/get-started">
        {title || <h2> Default nav button </h2>}
      </NavLink>
    </div>
  )
}

export default LinkButton