import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthForm from 'components/authForm/AuthForm';

import { hideModal } from 'redux/modal/modalActions';
import { register } from 'redux/auth/authActions';

const RegisterForm = ({ register, hideModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await register(formData);
    setFormData({ name: '', email: '', password: '', passwordConfirm: '' });
    hideModal();
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
  register: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired
};

export default connect(
  null,
  { register, hideModal }
)(RegisterForm);
