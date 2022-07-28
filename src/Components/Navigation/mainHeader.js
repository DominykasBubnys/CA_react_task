import React from 'react';
import classes from './mainHeader.module.css';

const MainHeader = props => {

  return <header className={classes.main_header}>
    
    <h1>One page</h1>
    
    {props.children}
  
  </header>;
};

export default MainHeader;