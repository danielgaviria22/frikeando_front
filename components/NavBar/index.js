import React from 'react';
import Link from 'next/link';
import { NavBarContainer } from './styles.js'

const NavBar = (props) => {
  return (
    <NavBarContainer color={props.color} secondColor={props.secondColor}>
      <ul>
        <li>
          <Link href="/hombre">
            <a>Hombre</a>
          </Link>
        </li>
        <li>
          <Link href="/mujer">
            <a>Mujer</a>
          </Link>
        </li>
        <li>
          <Link href="/sales">
            <a>Sales</a>
          </Link>
        </li>
      </ul>
    </NavBarContainer>
  )
};

export default NavBar; 