import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'hooks/useForm';

import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { loginRequest } from 'redux/auth/authActions';
import { showModalForm } from 'redux/modal/modalActions';

import { FormWrapper, StyledForm, StyledDiv, InputWrapper } from './styles';
import { HeadingSecondary } from 'styles/typography';

import { AppState } from 'redux/rootReducer';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  const [handleChange, handleSubmit, formData] = useForm(
    { email: '', password: '' },
    loginRequest as any
  );

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <HeadingSecondary>Login</HeadingSecondary>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="example@email.com"
            required={true}
            id="email"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            placeholder="••••••••"
            required={true}
            id="password"
          />
        </InputWrapper>
        <CustomButton color="primary" type="submit">
          {isLoading ? <Spinner size="small" color="whiteBg" /> : 'Login'}
        </CustomButton>
      </StyledForm>
      <StyledDiv>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModalForm('register'))}
        >
          Don't have an account? Register here.
        </CustomButton>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModalForm('forgot-password'))}
        >
          Forgot password? Reset it here.
        </CustomButton>
      </StyledDiv>
    </FormWrapper>
  );
};

export default LoginForm;
