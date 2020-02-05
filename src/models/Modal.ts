export type FormTypes = 'login' | 'register' | 'forgot-password';

export interface Modal {
  visible: boolean;
  formType?: FormTypes | null;
}
