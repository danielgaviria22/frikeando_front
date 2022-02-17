import React, { useState } from 'react';
import Link from 'next/link';
import { IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import MenuIcon from '../Icons/menu-icon.svg';
import SearchIcon1 from '../Icons/search_white.svg';
import SearchIcon2 from '../Icons/search_red.svg';
import CartIcon1 from '../Icons/shopping_cart_white.svg';
import CartIcon2 from '../Icons/shopping_cart_red.svg';

import NavBar from '../NavBar';

import { Color } from '../../config/styles';

import { HeaderContainer, IconsContainer, StyledBadge } from './styles';

const Header = () => {
  const [ search, setSearch ] = useState(false);
  const [ emptyCart, setEmptyCart ] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const handleSearch = () => {
    setSearch(!search);
  }

  return (
    <HeaderContainer>
      <div className="nav-bar">
        {!matches && (
          <IconButton>
            <MenuIcon />
          </IconButton>
        )}
        <h1>
          <Link href="/">
            <a>
              <img src="images/LogoLight.png" alt="Frikeando"/>
            </a>
          </Link>
        </h1>
        {matches && (
          <NavBar color={Color.$White} secondColor={Color.$FrikeandoRed}/>
        )}
        <IconsContainer>
          {matches && (
            <div className="search-button icon-button">
              <IconButton onClick={handleSearch}>
                {!search ? <SearchIcon1 /> : <SearchIcon2 />}
              </IconButton>
            </div>
          )}
          <div className="cart-button icon-button">
            <IconButton>
              <StyledBadge badgeContent={1} className="badge">
                {emptyCart ? <CartIcon1 /> : <CartIcon2 />}
              </StyledBadge>              
            </IconButton>
          </div>
        </IconsContainer>
      </div>
    </HeaderContainer>
  )
}

export default Header; 