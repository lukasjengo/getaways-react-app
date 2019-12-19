import { ModalTypes } from 'models/Modal';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export interface ShowModalAction {
  type: typeof SHOW_MODAL;
  payload: ModalTypes;
}

export interface HideModalAction {
  type: typeof HIDE_MODAL;
  payload?: undefined;
}

export type ModalActionTypes = ShowModalAction | HideModalAction;
