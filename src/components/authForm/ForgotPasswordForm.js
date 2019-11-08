import React, { useState } from 'react';

import { connect } from 'react-redux';

import AuthForm from 'components/authForm/AuthForm';

import { hideModal } from 'redux/modal/modalActions';
import { forgotPassword } from 'redux/auth/authActions';

const LoginForm = ({ forgotPassword, hideModal }) => {
  const [formData, setFormData] = useState({
    email: ''
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    await forgotPassword(formData);
    setFormData({ email: '' });
    hideModal();
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      onChange={onChange}
      formData={formData}
      type='forgot-password'
    />
  );
};

export default connect(
  null,
  { forgotPassword, hideModal }
)(LoginForm);
