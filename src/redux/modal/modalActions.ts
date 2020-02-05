import { FormTypes } from 'models/Modal';

import { SHOW_MODAL_FORM, HIDE_MODAL, ModalActionTypes } from './modalTypes';

export const showModalForm = (formType: FormTypes): ModalActionTypes => ({
  type: SHOW_MODAL_FORM,
  payload: formType
});

export const hideModal = (): ModalActionTypes => ({
  type: HIDE_MODAL
});
