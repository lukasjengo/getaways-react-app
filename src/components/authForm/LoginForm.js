import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useForm } from 'hooks/useForm';

import AuthForm from 'components/authForm/AuthForm';

import { login } from 'redux/auth/authActions';

const LoginForm = ({ login }) => {
  const [onChange, onSubmit, formData] = useForm(
    { email: '', password: '' },
    login
  );

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
