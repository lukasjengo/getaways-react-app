import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from 'redux/modal/modalActions';

import LoginForm from 'components/authForm/LoginForm';
import RegisterForm from 'components/authForm/RegisterForm';
import ForgotPasswordForm from 'components/authForm/ForgotPasswordForm';

import { ModalOverlay } from './styles';

const Modal = ({ modalType, hideModal }) => {
  const modalNode = useRef(null);

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
    // if (modalNode.current === e.target) {
    if (modalNode.current === e.target) {
      // outside click
      hideModal();
    }
  };

  if (modalType === null) return null;

  return (
    <ModalOverlay ref={modalNode}>
      {modalType === 'login' && <LoginForm />}
      {modalType === 'register' && <RegisterForm />}
      {modalType === 'forgot-password' && <ForgotPasswordForm />}
    </ModalOverlay>
  );
};

Modal.propTypes = {
  modalType: PropTypes.string,
  hideModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  modalType: state.modal.modalType,
});

export default connect(mapStateToProps, { hideModal })(Modal);
