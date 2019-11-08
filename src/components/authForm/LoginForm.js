import React, { useState } from 'react';

import { connect } from 'react-redux';

import AuthForm from 'components/authForm/AuthForm';

import { hideModal } from 'redux/modal/modalActions';
import { login } from 'redux/auth/authActions';

const LoginForm = ({ login, hideModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    await login(formData);
    setFormData({ email: '', password: '' });
    hideModal();
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      onChange={onChange}
      formData={formData}
      type='login'
    />
  );
};

export default connect(
  null,
  { login, hideModal }
)(LoginForm);
