import uuid from 'uuid';
import { takeEvery, put, call, all, delay } from 'redux-saga/effects';
import {
  SET_ALERT_WITH_TIMEOUT,
  SetAlertWithTimeoutAction
} from './alertTypes';
import { setAlert, removeAlert } from './alertActions';

export function* handleShowAlert({ payload }: SetAlertWithTimeoutAction) {
  const id = uuid.v4();
  yield put(setAlert({ msg: payload.msg, alertType: payload.alertType, id }));
  yield delay(payload.timeout);
  yield put(removeAlert(id));
}

export function* watchAlertRequest() {
  yield takeEvery(SET_ALERT_WITH_TIMEOUT, handleShowAlert);
}

export function* alertSagas() {
  yield all([call(watchAlertRequest)]);
}
