import { combineReducers } from 'redux';

import tourReducer from 'redux/tour/tourReducer';

const rootReducer = combineReducers({
  tour: tourReducer
});

export default rootReducer;
