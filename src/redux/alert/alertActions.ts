import {
  SET_ALERT,
  REMOVE_ALERT,
  AlertActionTypes,
  SET_ALERT_WITH_TIMEOUT
} from './alertTypes';
import { Alert, AlertTypes } from 'models/Alert';

export const setAlertWithTimeout = (
  msg: string,
  alertType: AlertTypes,
  timeout = 5000
): AlertActionTypes => ({
  type: SET_ALERT_WITH_TIMEOUT,
  payload: { msg, alertType, timeout }
});

export const setAlert = (alert: Alert): AlertActionTypes => ({
  type: SET_ALERT,
  payload: alert
});

export const removeAlert = (id: string): AlertActionTypes => ({
  type: REMOVE_ALERT,
  payload: id
});
