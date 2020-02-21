import { all, call } from 'redux-saga/effects';

import { tourSagas } from 'redux/tour/tourSagas';
import { authSagas } from 'redux/auth/authSagas';
import { alertSagas } from './alert/alertSagas';

export default function* rootSaga() {
  yield all([call(tourSagas), call(authSagas), call(alertSagas)]);
}
