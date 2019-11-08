import React from 'react';
import { connect } from 'react-redux';

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

const Navbar = ({ showModal, auth }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <LogoWrapperLink to='/'>
          <Logo />
        </LogoWrapperLink>
        <SearchInput />
        {auth.isAuthorized ? (
          <StyledLink to='/dashboard'>
            <img
              src={`${process.env.REACT_APP_SERVER_UPLOADS_URL}/users/${auth.user.photo}`}
              alt='user profile'
            />
            <span>{auth.user.name.split(' ')[0]}</span>
          </StyledLink>
        ) : (
          <StyledButton onClick={() => showModal('login')}>
            <span>Login</span>
            <CustomIcon name='icon-user' />
          </StyledButton>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { showModal }
)(Navbar);
