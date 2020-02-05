import { Modal as ModalState } from 'models/Modal';
import { SHOW_MODAL, HIDE_MODAL, ModalActionTypes } from './modalTypes';

const initialState: ModalState = {
  modalType: null
};

export default (state = initialState, action: ModalActionTypes): ModalState => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalType: action.payload
      };
    case HIDE_MODAL:
      return {
        ...state,
        modalType: null
      };
    default:
      return state;
  }
};
