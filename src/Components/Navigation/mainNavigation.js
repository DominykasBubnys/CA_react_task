import React from 'react';

import MainHeader from './mainHeader';
import NavLinks from './navLinks';

const MainNavigation = props => {

  return (
    <React.Fragment>

      <MainHeader>
        <NavLinks />
      </MainHeader>
      
    </React.Fragment>
  );
};

export default MainNavigation;