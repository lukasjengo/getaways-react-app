import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOADED,
  LOGOUT,
  DELETE_ACCOUNT,
  AUTH_ERROR
} from './authTypes';

const initialState = {
  isAuthorized: null,
  user: null,
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        user: payload,
        isLoading: false,
        error: null
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      return {
        ...state,
        isAuthorized: false,
        user: null,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
};
