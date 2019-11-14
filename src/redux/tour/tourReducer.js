import {
  GET_TOURS_REQUEST,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILURE,
  GET_CURRENT_TOUR_REQUEST,
  GET_CURRENT_TOUR_SUCCESS,
  GET_CURRENT_TOUR_FAILURE,
  GET_FILTER_TEXT
} from './tourTypes';

const initialState = {
  allTours: [],
  currentTour: null,
  filter: {
    text: null
  },
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TOURS_REQUEST:
    case GET_CURRENT_TOUR_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        allTours: payload,
        isLoading: false
      };
    case GET_CURRENT_TOUR_SUCCESS:
      return {
        ...state,
        currentTour: payload,
        isLoading: false
      };
    case GET_TOURS_FAILURE:
    case GET_CURRENT_TOUR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case GET_FILTER_TEXT:
      return {
        ...state,
        filter: { ...state.filter, text: payload }
      };
    default:
      return state;
  }
};
