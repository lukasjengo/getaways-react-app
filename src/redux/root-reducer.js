import { combineReducers } from 'redux';

import tourReducer from 'redux/tour/tourReducer';
import authReducer from 'redux/auth/authReducer';
import modalReducer from 'redux/modal/modalReducer';
import alertReducer from 'redux/alert/alertReducer';

const rootReducer = combineReducers({
  tour: tourReducer,
  auth: authReducer,
  modal: modalReducer,
  alerts: alertReducer,
});

export default rootReducer;
