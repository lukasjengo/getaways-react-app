import { Action } from 'redux';
import { User } from 'models/User';
import { LoginForm } from 'models/LoginForm';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const LOGOUT = 'LOGOUT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export interface RegisterRequestAction
  extends Action<typeof REGISTER_REQUEST> {}

export interface RegisterSuccessAction extends Action<typeof REGISTER_SUCCESS> {
  payload: User;
}

export interface RegisterFailureAction extends Action<typeof REGISTER_FAILURE> {
  payload: string;
}

export interface LoginRequestAction extends Action<typeof LOGIN_REQUEST> {
  payload: LoginForm;
}

export interface LoginSuccessAction extends Action<typeof LOGIN_SUCCESS> {
  payload: User;
}

export interface LoginFailureAction extends Action<typeof LOGIN_FAILURE> {
  payload: string;
}

export interface ForgotPasswordRequestAction
  extends Action<typeof FORGOT_PASSWORD_REQUEST> {}

export interface ForgotPasswordSuccessAction
  extends Action<typeof FORGOT_PASSWORD_SUCCESS> {}

export interface ForgotPasswordFailureAction
  extends Action<typeof FORGOT_PASSWORD_FAILURE> {
  payload: string;
}

export type AuthActionTypes =
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | ForgotPasswordRequestAction
  | ForgotPasswordSuccessAction
  | ForgotPasswordFailureAction;
