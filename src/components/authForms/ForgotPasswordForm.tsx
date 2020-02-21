import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'hooks/useForm';

import { forgotPasswordRequest } from 'redux/auth/authActions';
import { showModalForm } from 'redux/modal/modalActions';

import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { FormWrapper, StyledForm, StyledDiv, InputWrapper } from './styles';
import { HeadingSecondary } from 'styles/typography';

import { AppState } from 'redux/rootReducer';

const ForgotPasswordForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  const [handleChange, handleSubmit, formData] = useForm(
    { email: '' },
    forgotPasswordRequest as any
  );

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <HeadingSecondary>Forgot password?</HeadingSecondary>
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
        <CustomButton color="primary" type="submit">
          {isLoading ? (
            <Spinner size="small" color="whiteBg" />
          ) : (
            'Reset password'
          )}
        </CustomButton>
      </StyledForm>
      <StyledDiv>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModalForm('register'))}
          type="button"
        >
          Don't have an account? Register here.
        </CustomButton>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModalForm('login'))}
          type="button"
        >
          Already have an account? Login here.
        </CustomButton>
      </StyledDiv>
    </FormWrapper>
  );
};

export default ForgotPasswordForm;
