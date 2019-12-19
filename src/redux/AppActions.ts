import { AlertActionTypes } from './alert/alertTypes';
import { AuthActionTypes } from './auth/authTypes';
import { ModalActionTypes } from './modal/modalTypes';

export type AppActions = AlertActionTypes | AuthActionTypes | ModalActionTypes;
