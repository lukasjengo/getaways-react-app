import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthForm from 'components/authForm/AuthForm';

import { register } from 'redux/auth/authActions';

const RegisterForm = ({ register }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    setFormData({ name: '', email: '', password: '', passwordConfirm: '' });
    register(formData);
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      onChange={onChange}
      formData={formData}
      type='register'
    />
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired
};

export default connect(
  null,
  { register }
)(RegisterForm);
