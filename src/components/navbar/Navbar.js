import React from 'react';
import PropTypes from 'prop-types';
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
        {/* REFACTORING */}
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
            <CustomIcon name='icon-user' />
            <span>Log in</span>
          </StyledButton>
        )}
      </StyledNav>
    </StyledHeader>
  );
};

Navbar.propTypes = {
  showModal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { showModal }
)(Navbar);
