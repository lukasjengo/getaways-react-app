import React from 'react';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { forgotPassword } from 'redux/auth/authActions';
import { showModal } from 'redux/modal/modalActions';

import CustomButton from 'components/customButton/CustomButton';
import Spinner from 'components/spinner/Spinner';

import { FormWrapper, StyledForm, StyledDiv, InputWrapper } from './styles';
import { HeadingSecondary } from 'styles/typography';

import { AppState } from 'redux/root-reducer';

const ForgotPasswordForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => state.auth.isLoading);

  return (
    <FormWrapper>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={formData => {
          dispatch(forgotPassword(formData));
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <HeadingSecondary>Forgot password?</HeadingSecondary>
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
            <CustomButton color="primary" type="submit">
              {isLoading ? (
                <Spinner size="small" color="whiteBg" />
              ) : (
                'Reset password'
              )}
            </CustomButton>
          </StyledForm>
        )}
      </Formik>
      <StyledDiv>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModal('register'))}
          type="button"
        >
          Don't have an account? Register here.
        </CustomButton>
        <CustomButton
          isUnderlined={true}
          onClick={() => dispatch(showModal('login'))}
          type="button"
        >
          Already have an account? Login here.
        </CustomButton>
      </StyledDiv>
    </FormWrapper>
  );
};

export default ForgotPasswordForm;
