import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  LOGOUT,
  DELETE_ACCOUNT,
  AuthActionTypes,
} from './authTypes';
import { User } from 'models/User';

export interface AuthState {
  isAuthorized: null | boolean;
  user: null | User;
  isLoading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  isAuthorized: null,
  user: null,
  isLoading: false,
  error: null,
};

export default (state = initialState, action: AuthActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        user: payload,
        isLoading: false,
        error: null,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isAuthorized: false,
        user: null,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
