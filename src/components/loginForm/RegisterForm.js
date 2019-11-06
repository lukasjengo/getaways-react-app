import React, { useState } from 'react';

import { connect } from 'react-redux';

import { hideModal } from './node_modules/redux/modal/modalActions';
import { login } from './node_modules/redux/auth/authActions';

import CustomButton from './node_modules/components/customButton/CustomButton';

import { StyledForm, InputWrapper, FormWrapper } from '../registerForm/styles';
import { HeadingSecondary } from './node_modules/styles/typography';

const RegisterForm = ({ login, hideModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    login(formData);
    setFormData({ email: '', password: '' });
    hideModal();
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <HeadingSecondary>Register</HeadingSecondary>
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
        <CustomButton type='primary'>Register</CustomButton>
      </StyledForm>
    </FormWrapper>
  );
};

export default connect(
  null,
  { login, hideModal }
)(RegisterForm);
