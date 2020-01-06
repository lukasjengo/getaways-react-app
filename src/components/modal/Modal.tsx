import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { hideModal } from 'redux/modal/modalActions';

import LoginForm from 'components/authForms/LoginForm';
import RegisterForm from 'components/authForms/RegisterForm';
import ForgotPasswordForm from 'components/authForms/ForgotPasswordForm';

import { ModalOverlay } from './styles';
import { AppState } from 'redux/root-reducer';

const Modal: React.FC = () => {
  const modalType = useSelector((state: AppState) => state.modal.modalType);
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

  const handleClickOutside = (e: any) => {
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
