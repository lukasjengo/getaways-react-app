export type ModalTypes = 'login' | 'register' | 'forgot-password';

export interface Modal {
  modalType: ModalTypes | null;
}
