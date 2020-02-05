import { ModalTypes } from 'models/Modal';

import { SHOW_MODAL, HIDE_MODAL, ModalActionTypes } from './modalTypes';

// Modal types: 'login' 'register' 'forgotpassword'
export const showModal = (modalType: ModalTypes): ModalActionTypes => ({
  type: SHOW_MODAL,
  payload: modalType
});

export const hideModal = (): ModalActionTypes => ({
  type: HIDE_MODAL
});
