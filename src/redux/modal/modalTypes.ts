import { ModalTypes } from 'models/Modal';
import { Action } from 'redux';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export interface ShowModalAction extends Action<typeof SHOW_MODAL> {
  payload: ModalTypes;
}

export interface HideModalAction extends Action<typeof HIDE_MODAL> {}

export type ModalActionTypes = ShowModalAction | HideModalAction;
