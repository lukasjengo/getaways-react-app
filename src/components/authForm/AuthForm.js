import React from 'react';

import { connect } from 'react-redux';

import { showModal } from 'redux/modal/modalActions';

import CustomButton from 'components/customButton/CustomButton';
import FormInput from 'components/formInput/FormInput';
import Spinner from 'components/spinner/Spinner';

import { FormWrapper, StyledForm, StyledDiv } from './styles';
import { HeadingSecondary } from 'styles/typography';

const AuthForm = ({
  onSubmit,
  onChange,
  formData,
  isLoading,
  type,
  showModal
}) => {
  return (
    <FormWrapper>
      <StyledForm onSubmit={onSubmit}>
        <HeadingSecondary>
          {type === 'login' && 'Login'}
          {type === 'register' && 'Register'}
          {type === 'forgot-password' && 'Forgot password?'}
        </HeadingSecondary>
        {type === 'register' && (
          <FormInput
            onChange={onChange}
            value={formData.name}
            type='text'
            name='name'
            placeholder='John Johnson'
            required={true}
          />
        )}
        <FormInput
          onChange={onChange}
          value={formData.email}
          type='email'
          name='email'
          placeholder='example@email.com'
          required={true}
        />
        {type === 'register' || type === 'login' ? (
          <FormInput
            onChange={onChange}
            value={formData.password}
            type='password'
            name='password'
            placeholder='••••••••'
            required={true}
            minLength='8'
          />
        ) : null}
        {type === 'register' && (
          <FormInput
            onChange={onChange}
            value={formData.passwordConfirm}
            type='password'
            name='passwordConfirm'
            placeholder='••••••••'
            required={true}
            minLength='8'
          />
        )}
        <CustomButton color='primary'>
          {isLoading ? (
            <Spinner size='small' />
          ) : (
            (type === 'login' && 'Login') ||
            (type === 'register' && 'Register') ||
            (type === 'forgot-password' && 'Reset password')
          )}
        </CustomButton>
      </StyledForm>
      <StyledDiv>
        {type === 'login' || type === 'forgot-password' ? (
          <CustomButton type='underline' onClick={() => showModal('register')}>
            Don't have an account? Register here.
          </CustomButton>
        ) : null}
        {type === 'register' || type === 'forgot-password' ? (
          <CustomButton type='underline' onClick={() => showModal('login')}>
            Already have an account? Login here.
          </CustomButton>
        ) : null}
        {type === 'register' || type === 'login' ? (
          <CustomButton
            type='underline'
            onClick={() => showModal('forgot-password')}
          >
            Forgot password? Reset it here.
          </CustomButton>
        ) : null}
      </StyledDiv>
    </FormWrapper>
  );
};

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading
});

export default connect(
  mapStateToProps,
  { showModal }
)(AuthForm);
