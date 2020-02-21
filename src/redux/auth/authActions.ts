import { User } from 'models/User';
import { LoginForm } from 'models/LoginForm';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  AuthActionTypes,
  ISLOGGEDIN_REQUEST
} from './authTypes';
import { RegisterForm } from 'models/RegisterForm';
import { ForgotPasswordForm } from 'models/ForgotPasswordForm';

export const loginRequest = (formData: LoginForm): AuthActionTypes => ({
  type: LOGIN_REQUEST,
  payload: formData
});

export const loginSuccess = (user: User): AuthActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = (error: string): AuthActionTypes => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const isLoggedInRequest = (): AuthActionTypes => ({
  type: ISLOGGEDIN_REQUEST
});

export const registerRequest = (formData: RegisterForm): AuthActionTypes => ({
  type: REGISTER_REQUEST,
  payload: formData
});

export const registerSuccess = (user: User): AuthActionTypes => ({
  type: REGISTER_SUCCESS,
  payload: user
});

export const registerFailure = (error: string): AuthActionTypes => ({
  type: REGISTER_FAILURE,
  payload: error
});

export const forgotPasswordRequest = (
  formData: ForgotPasswordForm
): AuthActionTypes => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: formData
});

export const forgotPasswordSuccess = (): AuthActionTypes => ({
  type: FORGOT_PASSWORD_SUCCESS
});

export const forgotPasswordFailure = (error: string): AuthActionTypes => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: error
});
