import { SHOW_MODAL, HIDE_MODAL } from './modalTypes';

const initialState = {
  modalType: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        modalType: payload
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
