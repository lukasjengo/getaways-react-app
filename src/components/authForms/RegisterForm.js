import React, { useState } from 'react';

import { connect } from 'react-redux';

import { hideModal, showModal } from 'redux/modal/modalActions';
import { register } from 'redux/auth/authActions';

import CustomButton from 'components/customButton/CustomButton';
import FormInput from 'components/formInput/FormInput';

import { FormWrapper, StyledForm, StyledDiv } from './styles';
import { HeadingSecondary } from 'styles/typography';

const RegisterForm = ({ register, hideModal, showModal }) => {
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
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <HeadingSecondary>Register</HeadingSecondary>
        <FormInput
          onChange={onChange}
          value={formData.name}
          type='text'
          name='name'
          placeholder='John Johnson'
          required={true}
        />
        <FormInput
          onChange={onChange}
          value={formData.email}
          type='email'
          name='email'
          placeholder='example@email.com'
          required={true}
        />
        <FormInput
          onChange={onChange}
          value={formData.password}
          type='password'
          name='password'
          placeholder='••••••••'
          required={true}
        />
        <FormInput
          onChange={onChange}
          value={formData.passwordConfirm}
          type='password'
          name='passwordConfirm'
          placeholder='••••••••'
          required={true}
        />
        <CustomButton color='primary'>Register</CustomButton>
      </StyledForm>
      <StyledDiv>
        <CustomButton type='underline' onClick={() => showModal('login')}>
          Already have an account? Login here.
        </CustomButton>
        <CustomButton
          type='underline'
          onClick={() => showModal('forgot-password')}
        >
          Forgot password? Reset it here.
        </CustomButton>
      </StyledDiv>
    </FormWrapper>
  );
};

export default connect(
  null,
  { register, hideModal, showModal }
)(RegisterForm);
