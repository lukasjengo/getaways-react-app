import { SHOW_MODAL, HIDE_MODAL } from './modalTypes';

// Modal types: 'login' 'register' 'forgotpassword'
export const showModal = modalType => dispatch => {
  dispatch({ type: SHOW_MODAL, payload: modalType });
};

export const hideModal = () => dispatch => {
  dispatch({ type: HIDE_MODAL });
};
