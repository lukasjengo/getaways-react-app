export type AlertTypes = 'danger' | 'success';

export interface Alert {
  msg: string;
  alertType: AlertTypes;
  id: string;
}
