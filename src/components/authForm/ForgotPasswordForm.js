import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthForm from 'components/authForm/AuthForm';

import { forgotPassword } from 'redux/auth/authActions';

const ForgotPasswordForm = ({ forgotPassword }) => {
  const [formData, setFormData] = useState({
    email: ''
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    setFormData({ email: '' });
    forgotPassword(formData);
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

ForgotPasswordForm.propTypes = {
  forgotPassword: PropTypes.func.isRequired
};

export default connect(
  null,
  { forgotPassword }
)(ForgotPasswordForm);
