import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

import { hideModal } from 'redux/modal/modalActions';

import LoginForm from 'components/authForm/LoginForm';
import RegisterForm from 'components/authForm/RegisterForm';
import ForgotPasswordForm from 'components/authForm/ForgotPasswordForm';

import { ModalOverlay } from './styles';

const Modal = ({ modalType, hideModal }) => {
  const node = useRef(null);

  useEffect(() => {
    if (modalType !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    //eslint-disable-next-line
  }, [modalType]);

  const handleClickOutside = e => {
    if (node.current === e.target) {
      // outside click
      hideModal();
    }
  };

  if (modalType === null) return null;

  return (
    <ModalOverlay ref={node}>
      {modalType === 'login' && <LoginForm />}
      {modalType === 'register' && <RegisterForm />}
      {modalType === 'forgot-password' && <ForgotPasswordForm />}
    </ModalOverlay>
  );
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType
});

export default connect(
  mapStateToProps,
  { hideModal }
)(Modal);
