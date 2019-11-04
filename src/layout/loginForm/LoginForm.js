import React, { useState } from 'react';

import { connect } from 'react-redux';

import { login } from 'redux/auth/authActions';

import { StyledForm, InputWrapper } from './styles';
import { HeadingSecondary } from 'styles/typography';
import { StyledButton } from 'styles/components';

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
    login(formData);
    setFormData({ email: '', password: '' });
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <HeadingSecondary>Login</HeadingSecondary>
      <InputWrapper>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          name='email'
          value={formData.email}
          placeholder='example@email.com'
          required
          onChange={onChange}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          name='password'
          value={formData.password}
          placeholder='••••••••'
          required
          onChange={onChange}
        />
      </InputWrapper>
      <StyledButton type='primary'>Login</StyledButton>
      <StyledButton type='primary'>Forgot your password?</StyledButton>
    </StyledForm>
  );
};

export default connect(
  null,
  { login }
)(LoginForm);
