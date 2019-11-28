import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideModal } from 'redux/modal/modalActions';

import LoginForm from 'components/authForm/LoginForm';
import RegisterForm from 'components/authForm/RegisterForm';
import ForgotPasswordForm from 'components/authForm/ForgotPasswordForm';

import { ModalOverlay } from './styles';

const Modal = () => {
  const modalType = useSelector(state => state.modal.modalType);
  const dispatch = useDispatch();
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
      dispatch(hideModal());
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

export default Modal;
