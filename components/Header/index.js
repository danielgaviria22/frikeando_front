import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {HeaderContainer} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="nav-bar">
        <h1>
          <a>
            <img src="images/LogoLight.png" alt="Frikeando"/>
          </a>
        </h1>
      </div>
    </HeaderContainer>
  )
}

export default Header; 