import axios from 'axios';
import { takeLatest, put, call, all } from 'redux-saga/effects';

import { loginSuccess, loginFailure, loginRequest } from './authActions';
import { hideModal } from 'redux/modal/modalActions';

import { LOGIN_REQUEST, LoginRequestAction } from './authTypes';

import { LoginForm } from 'models/LoginForm';

axios.defaults.withCredentials = true;

export function* handleLogin(action: LoginRequestAction) {
  try {
    const res = yield call(
      axios.post,
      `${process.env.REACT_APP_API_URL}/users/login`,
      action.payload
    );
    yield put(hideModal());
    // yield alert
    // TODO: Fix API response JSON
    yield put(loginSuccess(res.data.data.user));
  } catch (err) {
    yield put(loginFailure(err.response.data.message));
    // yield alert
  }
}

export function* handleIsLoggedIn() {}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, handleLogin);
}

export function* authSagas() {
  yield all([call(watchLoginRequest)]);
}
