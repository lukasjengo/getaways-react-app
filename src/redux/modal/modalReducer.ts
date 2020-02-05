import { Modal } from 'models/Modal';
import { SHOW_MODAL_FORM, HIDE_MODAL, ModalActionTypes } from './modalTypes';

const initialState: Modal = {
  visible: false,
  formType: null
};

export default (state = initialState, action: ModalActionTypes): Modal => {
  switch (action.type) {
    case SHOW_MODAL_FORM:
      return {
        ...state,
        visible: true,
        formType: action.payload
      };
    case HIDE_MODAL:
      return {
        ...state,
        visible: false,
        formType: null
      };
    default:
      return state;
  }
};
