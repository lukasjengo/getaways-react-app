import { Action } from 'redux';
import { Alert, AlertTypes } from 'models/Alert';

export const SET_ALERT_WITH_TIMEOUT = 'SET_ALERT_WITH_TIMEOUT';
export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export interface SetAlertWithTimeoutAction
  extends Action<typeof SET_ALERT_WITH_TIMEOUT> {
  payload: { msg: string; alertType: AlertTypes; timeout: number };
}

export interface SetAlertAction extends Action<typeof SET_ALERT> {
  payload: Alert;
}

export interface RemoveAlertAction extends Action<typeof REMOVE_ALERT> {
  payload: string;
}

export type AlertActionTypes =
  | SetAlertWithTimeoutAction
  | SetAlertAction
  | RemoveAlertAction;
