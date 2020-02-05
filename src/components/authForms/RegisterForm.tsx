import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'hooks/useForm';

import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { register } from 'redux/auth/authActions';
import { showModalForm } from 'redux/modal/modalActions';

import { FormWrapper, StyledForm, StyledDiv, InputWrapper } from './styles';
import { HeadingSecondary } from 'styles/typography';

import { AppState } from 'redux/root-reducer';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  const [handleChange, handleSubmit, formData] = useForm(
    { name: '', email: '', password: '', passwordConfirm: '' },
    register
  );

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <HeadingSecondary>Register</HeadingSecondary>
        <InputWrapper>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={formData.name}
            type="text"
            name="name"
            placeholder="John Johnson"
            required={true}
            id="name"
          />
        </InputWrapper>
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
        <InputWrapper>
          <label htmlFor="password">Confirm password</label>
          <input
            onChange={handleChange}
            value={formData.passwordConfirm}
            type="password"
            name="passwordConfirm"
            placeholder="••••••••"
            required={true}
            id="passwordConfirm"
          />
        </InputWrapper>
        <CustomButton color="primary" type="submit">
          {isLoading ? <Spinner size="small" color="whiteBg" /> : 'Register'}
        </CustomButton>
      </StyledForm>
      <StyledDiv>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModalForm('login'))}
        >
          Already have an account? Login here.
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

export default RegisterForm;
