import axios from 'axios';

import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { User } from 'models/User';
import { AppActions } from 'redux/AppActions';
import { LoginForm } from 'models/LoginForm';

import { setAlert } from 'redux/alert/alertActions';
import { hideModal } from 'redux/modal/modalActions';

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
  LOGOUT,
  DELETE_ACCOUNT,
  AuthActionTypes
} from './authTypes';
import { RegisterForm } from 'models/RegisterForm';
import { ForgotPasswordForm } from 'models/ForgotPasswordForm';

export const loginRequest: ActionCreator<AuthActionTypes> = (
  formData: LoginForm
) => ({
  type: LOGIN_REQUEST,
  payload: formData
});

export const loginSuccess: ActionCreator<AuthActionTypes> = (user: User) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const loginFailure: ActionCreator<AuthActionTypes> = (
  error: string
) => ({
  type: LOGIN_FAILURE,
  payload: error
});

// export const login: ActionCreator<ThunkAction<
//   Promise<AuthActionTypes>,
//   User | string,
//   LoginForm,
//   AuthActionTypes
// >> = (formData: LoginForm) => async (dispatch: Dispatch<AppActions>) => {
//   // dispatch({ type: LOGIN_REQUEST });
//   try {
//     const res = await axios.post(
//       `${process.env.REACT_APP_API_URL}/users/login`,
//       formData
//     );
//     dispatch(hideModal());
//     dispatch(setAlert('Login successful', 'success') as any);
//     return dispatch({ type: LOGIN_SUCCESS, payload: res.data.data.user });
//   } catch (err) {
//     dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
//     // USE RETURN SO THAT THUNKACTION PROMISE CAN BE CORRECT ACTION TYPE RATHER THAN VOID
//     return dispatch(setAlert(err.response.data.message, 'danger') as any);
//   }
// };

export const isLoggedIn: ActionCreator<ThunkAction<
  Promise<void>,
  User | string,
  null,
  AuthActionTypes
>> = () => async (dispatch: Dispatch<AuthActionTypes>) => {
  // dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/isloggedin`
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.data.user });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
  }
};

export const register: ActionCreator<ThunkAction<
  Promise<void>,
  User | string,
  RegisterForm,
  AuthActionTypes
>> = (formData: RegisterForm) => async (dispatch: Dispatch<AppActions>) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/signup`,
      formData
    );
    dispatch(hideModal());
    dispatch(setAlert('Registration successful', 'success') as any);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.data.user });
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err.response.data.message });
    dispatch(setAlert(err.response.data.message, 'danger') as any);
  }
};

export const forgotPassword: ActionCreator<ThunkAction<
  Promise<void>,
  null,
  ForgotPasswordForm,
  AuthActionTypes
>> = (formData: ForgotPasswordForm) => async (
  dispatch: Dispatch<AppActions>
) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/users/forgotpassword`,
      formData
    );
    dispatch(hideModal());
    dispatch({ type: FORGOT_PASSWORD_SUCCESS });
    dispatch(
      setAlert(
        'Pasword reset instructions were sent to your email',
        'success'
      ) as any
    );
  } catch (err) {
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: err.response.data.message
    });
    dispatch(setAlert(err.response.data.message, 'danger') as any);
  }
};
