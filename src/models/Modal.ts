export type ModalTypes = 'login' | 'register' | 'forgotpassword';

export interface Modal {
  modalType: ModalTypes | null;
}
