import { Alert } from 'models/Alert';

export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: Alert;
}

export interface RemoveAlertAction {
  type: typeof REMOVE_ALERT;
  payload: string;
}

export type AlertActionTypes = SetAlertAction | RemoveAlertAction;
