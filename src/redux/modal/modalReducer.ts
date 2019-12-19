import { Modal } from 'models/Modal';
import { SHOW_MODAL, HIDE_MODAL, ModalActionTypes } from './modalTypes';

const initialState: Modal = {
  modalType: null,
};

export default (state = initialState, action: ModalActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalType: payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalType: null,
      };
    default:
      return state;
  }
};
