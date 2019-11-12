import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useForm } from 'hooks/useForm';

import AuthForm from 'components/authForm/AuthForm';

import { forgotPassword } from 'redux/auth/authActions';

const ForgotPasswordForm = ({ forgotPassword }) => {
  const [onChange, onSubmit, formData] = useForm({ email: '' }, forgotPassword);

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
