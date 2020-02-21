import axios from 'axios';
import { takeLatest, put, call, all } from 'redux-saga/effects';

import {
  loginSuccess,
  loginFailure,
  registerFailure,
  forgotPasswordSuccess,
  registerSuccess,
  forgotPasswordFailure
} from './authActions';

import {
  LOGIN_REQUEST,
  LoginRequestAction,
  ISLOGGEDIN_REQUEST,
  REGISTER_REQUEST,
  RegisterRequestAction,
  FORGOT_PASSWORD_REQUEST,
  ForgotPasswordRequestAction
} from './authTypes';

import { hideModal } from 'redux/modal/modalActions';
import { setAlertWithTimeout } from 'redux/alert/alertActions';

axios.defaults.withCredentials = true;

export function* handleLogin(action: LoginRequestAction) {
  try {
    const res = yield call(
      axios.post,
      `${process.env.REACT_APP_API_URL}/users/login`,
      action.payload
    );
    yield put(hideModal());
    yield put(loginSuccess(res.data.data.user));
    yield put(setAlertWithTimeout('Login successful', 'success'));
  } catch (err) {
    yield put(loginFailure(err.response.data.message));
    yield put(setAlertWithTimeout(err.response.data.message, 'danger'));
  }
}

export function* handleRegister(action: RegisterRequestAction) {
  try {
    const res = yield call(
      axios.post,
      `${process.env.REACT_APP_API_URL}/users/signup`,
      action.payload
    );
    yield put(hideModal());
    yield put(registerSuccess(res.data.data.user));
    yield put(setAlertWithTimeout('Registration successful', 'success'));
  } catch (err) {
    yield put(registerFailure(err.response.data.message));
    yield put(setAlertWithTimeout(err.response.data.message, 'danger'));
  }
}

export function* handleForgotPassword(action: ForgotPasswordRequestAction) {
  try {
    yield call(
      axios.post,
      `${process.env.REACT_APP_API_URL}/users/forgotpassword`,
      action.payload
    );
    yield put(hideModal());
    yield put(forgotPasswordSuccess());
    yield put(
      setAlertWithTimeout(
        'Pasword reset instructions were sent to your email',
        'success'
      )
    );
  } catch (err) {
    yield put(forgotPasswordFailure(err.response.data.message));
    yield put(setAlertWithTimeout(err.response.data.message, 'danger'));
  }
}

export function* handleIsLoggedIn() {
  try {
    const res = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/users/isloggedin`
    );
    yield put(loginSuccess(res.data.data.user));
  } catch (err) {
    yield put(loginFailure(err.response.data.message));
    // TODO: Check if backend sending correct error message
    yield put(setAlertWithTimeout(err.response.data.message, 'danger'));
  }
}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

export function* watchRegisterRequest() {
  yield takeLatest(REGISTER_REQUEST, handleRegister);
}

export function* watchForgotPasswordRequest() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, handleForgotPassword);
}

export function* watchIsLoggedInRequest() {
  yield takeLatest(ISLOGGEDIN_REQUEST, handleIsLoggedIn);
}

export function* authSagas() {
  yield all([
    call(watchLoginRequest),
    call(watchIsLoggedInRequest),
    call(watchRegisterRequest),
    call(watchForgotPasswordRequest)
  ]);
}
