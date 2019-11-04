import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { showModal } from 'redux/modal/modalActions';

import SearchInput from 'components/searchInput/SearchInput';

import { ReactComponent as Logo } from 'assets/logo.svg';

import { StyledHeader, StyledNav, LogoWrapperLink, StyledUl } from './styles';

const Navbar = ({ showModal }) => {
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
            <button onClick={() => showModal('login')}>Login</button>
          </li>
          <li>
            <Link to='/logout'>Log Out</Link>
          </li>
        </StyledUl>
      </StyledNav>
    </StyledHeader>
  );
};

export default connect(
  null,
  { showModal }
)(Navbar);
