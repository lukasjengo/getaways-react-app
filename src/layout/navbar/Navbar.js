import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from 'components/searchInput/SearchInput';

import { ReactComponent as Logo } from 'assets/logo.svg';

import { StyledHeader, StyledNav, LogoWrapperLink, StyledUl } from './styles';

const Navbar = ({ getTours }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <div>
          <LogoWrapperLink to='/'>
            <Logo />
            <span>GetAways</span>
          </LogoWrapperLink>
        </div>
        <SearchInput />
        <StyledUl>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/logout'>Log Out</Link>
          </li>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
