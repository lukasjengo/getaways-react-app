import React from 'react';
import { useSelector } from 'react-redux';

import LoginForm from 'components/authForms/LoginForm';
import RegisterForm from 'components/authForms/RegisterForm';
import ForgotPasswordForm from 'components/authForms/ForgotPasswordForm';

import { AppState } from 'redux/root-reducer';

const ModalForm = () => {
  const formType = useSelector((state: AppState) => state.modal.formType);

  switch (formType) {
    case 'login':
      return <LoginForm />;
    case 'register':
      return <RegisterForm />;
    case 'forgot-password':
      return <ForgotPasswordForm />;
    default:
      return null;
  }
};

export default ModalForm;
