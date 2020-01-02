import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Field, Formik } from 'formik';

import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { login } from 'redux/auth/authActions';
import { showModal } from 'redux/modal/modalActions';

import { FormWrapper, StyledForm, StyledDiv, InputWrapper } from './styles';
import { HeadingSecondary } from 'styles/typography';

import { AppState } from 'redux/root-reducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  return (
    <FormWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={formData => {
          dispatch(login(formData));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <HeadingSecondary>Login</HeadingSecondary>
            <InputWrapper>
              <label htmlFor="email">Email</label>
              <Field
                onChange={handleChange}
                value={values.email}
                type="email"
                name="email"
                placeholder="example@email.com"
                required={true}
                id="email"
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <Field
                onChange={handleChange}
                value={values.password}
                type="password"
                name="password"
                placeholder="••••••••"
                required={true}
                minLength="8"
                id="password"
              />
            </InputWrapper>
            <CustomButton color="primary" type="submit">
              {isLoading ? (
                <Spinner size="small" color="colorWhiteBg" />
              ) : (
                'Login'
              )}
            </CustomButton>
          </StyledForm>
        )}
      </Formik>
      <StyledDiv>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModal('register'))}
        >
          Don't have an account? Register here.
        </CustomButton>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModal('forgot-password'))}
        >
          Forgot password? Reset it here.
        </CustomButton>
      </StyledDiv>
    </FormWrapper>
  );
};

export default LoginForm;
