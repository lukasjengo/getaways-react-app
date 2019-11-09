import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { login, hideModal }
)(LoginForm);
