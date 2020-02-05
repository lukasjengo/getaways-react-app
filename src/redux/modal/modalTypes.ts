import { FormTypes } from 'models/Modal';
import { Action } from 'redux';

export const SHOW_MODAL_FORM = 'SHOW_MODAL_FORM';
export const HIDE_MODAL = 'HIDE_MODAL';

export interface ShowModalFormAction extends Action<typeof SHOW_MODAL_FORM> {
  payload: FormTypes;
}

export interface HideModalAction extends Action<typeof HIDE_MODAL> {}

export type ModalActionTypes = ShowModalFormAction | HideModalAction;
