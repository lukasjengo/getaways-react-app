import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showModal } from 'redux/modal/modalActions';

import SearchInput from 'components/searchInput/SearchInput';
import CustomIcon from 'components/customIcon/CustomIcon';

import { ReactComponent as Logo } from 'assets/logo.svg';

import {
  StyledHeader,
  StyledNav,
  LogoWrapperLink,
  StyledLink,
  StyledButton,
} from './styles';

const Navbar = () => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledNav>
        <LogoWrapperLink to="/">
          <Logo />
        </LogoWrapperLink>
        <SearchInput />
        {/* REFACTORING */}
        {auth.isAuthorized ? (
          <StyledLink to="/dashboard">
            <img
              src={`${process.env.REACT_APP_SERVER_UPLOADS_URL}/users/${auth.user.photo}`}
              alt="user profile"
            />
            <span>{auth.user.name.split(' ')[0]}</span>
          </StyledLink>
        ) : (
          <StyledButton onClick={() => dispatch(showModal('login'))}>
            <CustomIcon name="icon-user" />
            <span>Log in</span>
          </StyledButton>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
