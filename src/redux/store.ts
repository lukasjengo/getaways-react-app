import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import rootReducer, { AppState } from './root-reducer';
import { AppActions } from './AppActions';

const initialState = {};

const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>];

const store: Store<AppState> = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
