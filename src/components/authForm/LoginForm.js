import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthForm from 'components/authForm/AuthForm';

import { login } from 'redux/auth/authActions';

const LoginForm = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setFormData({ email: '', password: '' });
    login(formData);
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
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginForm);
