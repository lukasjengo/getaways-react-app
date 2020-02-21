import axios from 'axios';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import {
  GET_TOURS_REQUEST,
  GET_CURRENT_TOUR_REQUEST,
  GetCurrentTourRequestAction
} from './tourTypes';

import {
  getToursSuccess,
  getToursFailure,
  getCurrentTourFailure,
  getCurrentTourSuccess
} from './tourActions';

import { Tour } from 'models/Tour';

export function* handleGetTours() {
  try {
    const res = yield call(axios.get, `${process.env.REACT_APP_API_URL}/tours`);
    const data: Tour[] = res.data.data;
    yield put(getToursSuccess(data));
  } catch (err) {
    yield put(getToursFailure(err.response.data.message));
  }
}

export function* handleGetCurrentTour(action: GetCurrentTourRequestAction) {
  try {
    const res = yield call(
      axios.get,
      `${process.env.REACT_APP_API_URL}/tours/${action.payload}`
    );
    const data: Tour = res.data.data;
    yield put(getCurrentTourSuccess(data));
  } catch (err) {
    yield put(getCurrentTourFailure(err.response.data.message));
  }
}

export function* watchGetToursRequest() {
  yield takeLatest(GET_TOURS_REQUEST, handleGetTours);
}

export function* watchGetCurrentTourRequest() {
  yield takeLatest(GET_CURRENT_TOUR_REQUEST, handleGetCurrentTour);
}

export function* tourSagas() {
  yield all([call(watchGetToursRequest), call(watchGetCurrentTourRequest)]);
}
