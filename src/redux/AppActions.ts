import { AlertActionTypes } from './alert/alertTypes';
import { AuthActionTypes } from './auth/authTypes';
import { ModalActionTypes } from './modal/modalTypes';
import { TourActionTypes } from './tour/tourTypes';

export type AppActions =
  | AlertActionTypes
  | AuthActionTypes
  | ModalActionTypes
  | TourActionTypes;
