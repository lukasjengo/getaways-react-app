import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { showModal } from 'redux/modal/modalActions';

import SearchInput from 'components/searchInput/SearchInput';
import CustomIcon from 'components/customIcon/CustomIcon';

import { ReactComponent as Logo } from 'assets/logo.svg';

import {
  StyledHeader,
  StyledNav,
  LogoWrapperLink,
  StyledLink,
  StyledButton
} from './styles';
import { AppState } from 'redux/root-reducer';

const Navbar: React.FC = () => {
  const auth = useSelector((state: AppState) => state.auth, shallowEqual);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <StyledNav>
        <LogoWrapperLink to="/">
          <Logo />
        </LogoWrapperLink>
        <SearchInput />
        {/* REFACTORING */}
        {auth.isAuthorized && auth.user !== null ? (
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
