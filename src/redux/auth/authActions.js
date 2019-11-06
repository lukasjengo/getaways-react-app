import axios from 'axios';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOADED,
  LOGOUT,
  DELETE_ACCOUNT,
  AUTH_ERROR
} from './authTypes';

axios.defaults.withCredentials = true;

export const login = formData => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let res;
    if (formData) {
      res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/login`,
        formData
      );
    } else {
      res = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/isloggedin`
      );
    }
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
    dispatch({ type: REGISTER_SUCCESS, payload: res.data.data.user });
  } catch (err) {
    dispatch({ type: REGISTER_FAILURE, payload: err.response.data.message });
  }
};
