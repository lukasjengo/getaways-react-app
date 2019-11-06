import React, { useState } from 'react';

import { connect } from 'react-redux';

import { hideModal, showModal } from 'redux/modal/modalActions';
import { login } from 'redux/auth/authActions';

import FormInput from 'components/formInput/FormInput';
import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { FormWrapper, StyledForm, StyledDiv } from './styles';
import { HeadingSecondary } from 'styles/typography';

const LoginForm = ({ login, hideModal, showModal, auth }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    await login(formData);
    setFormData({ email: '', password: '' });
    hideModal();
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <HeadingSecondary>Login</HeadingSecondary>
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
        <CustomButton color='primary'>
          {auth.isLoading ? <Spinner size='small' /> : 'Login'}
        </CustomButton>
      </StyledForm>
      <StyledDiv>
        <CustomButton type='underline' onClick={() => showModal('register')}>
          Don't have an accout? Register here.
        </CustomButton>
        <CustomButton type='underline'>
          Forgot password? Reset it here.
        </CustomButton>
      </StyledDiv>
    </FormWrapper>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { login, hideModal, showModal }
)(LoginForm);
