import axios from 'axios';
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
} from './authTypes';

axios.defaults.withCredentials = true;

export const login = formData => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/login`,
      formData
    );
    dispatch(hideModal());
    dispatch(setAlert('Login successful', 'success'));
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.data.user });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

export const isLoggedIn = () => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/isloggedin`
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.data.user });
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
  }
};

export const register = formData => async dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/signup`,
      formData
    );
    dispatch(hideModal());
    dispatch(setAlert('Registration successful', 'success'));
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.data.user });
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err.response.data.message });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};

export const forgotPassword = formData => async dispatch => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });
  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/users/forgotpassword`,
      formData
    );
    dispatch(hideModal());
    dispatch({ type: FORGOT_PASSWORD_SUCCESS });
    dispatch(
      setAlert('Pasword reset instructions were sent to your email', 'success')
    );
  } catch (err) {
    dispatch({
      type: FORGOT_PASSWORD_FAILURE,
      payload: err.response.data.message,
    });
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};
