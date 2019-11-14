import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useForm } from 'hooks/useForm';

import AuthForm from 'components/authForm/AuthForm';

import { register } from 'redux/auth/authActions';

const RegisterForm = ({ register }) => {
  const [onChange, onSubmit, formData] = useForm(
    { name: '', email: '', password: '', passwordConfirm: '' },
    register
  );

  return (
    <AuthForm
      onSubmit={onSubmit}
      onChange={onChange}
      formData={formData}
      type="register"
    />
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(RegisterForm);
