import React, { useState } from 'react';

import { connect } from 'react-redux';

import { hideModal, showModal } from 'redux/modal/modalActions';
import { login } from 'redux/auth/authActions';

import FormInput from 'components/formInput/FormInput';
import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { FormWrapper, StyledForm, StyledDiv } from './styles';
import { HeadingSecondary } from 'styles/typography';

const ForgotPasswordForm = ({ login, hideModal, showModal, auth }) => {
  const [formData, setFormData] = useState({
    email: ''
  });
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    await login(formData);
    setFormData({ email: '' });
    hideModal();
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <HeadingSecondary>
          Forgot password? Type in your email.
        </HeadingSecondary>
        <FormInput
          onChange={onChange}
          value={formData.email}
          type='email'
          name='email'
          placeholder='example@email.com'
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
          Have an account? Login here.
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
)(ForgotPasswordForm);
