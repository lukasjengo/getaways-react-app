import { SET_ALERT, REMOVE_ALERT, AlertActionTypes } from './alertTypes';
import { Alert } from 'models/Alert';

export type AlertState = readonly Alert[];

const initialState: AlertState = [];

export default (state = initialState, action: AlertActionTypes): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};
