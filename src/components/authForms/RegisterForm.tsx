import React from 'react';

import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { register } from 'redux/auth/authActions';
import { showModal } from 'redux/modal/modalActions';

import { FormWrapper, StyledForm, StyledDiv, InputWrapper } from './styles';
import { HeadingSecondary } from 'styles/typography';

import { AppState } from 'redux/root-reducer';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          passwordConfirm: '',
        }}
        onSubmit={formData => {
          dispatch(register(formData));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <HeadingSecondary>Register</HeadingSecondary>
            <InputWrapper>
              <label htmlFor="name">Name</label>
              <Field
                onChange={handleChange}
                value={values.name}
                type="text"
                name="name"
                placeholder="John Johnson"
                required={true}
                id="name"
              />
            </InputWrapper>
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
            <InputWrapper>
              <label htmlFor="password">Confirm password</label>
              <Field
                onChange={handleChange}
                value={values.passwordConfirm}
                type="password"
                name="passwordConfirm"
                placeholder="••••••••"
                required={true}
                minLength="8"
                id="passwordConfirm"
              />
            </InputWrapper>
            <CustomButton color="primary" type="submit">
              {isLoading ? (
                <Spinner size="small" color="whiteBg" />
              ) : (
                'Register'
              )}
            </CustomButton>
          </StyledForm>
        )}
      </Formik>
      <StyledDiv>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModal('login'))}
        >
          Already have an account? Login here.
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

export default RegisterForm;
