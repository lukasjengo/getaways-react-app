import { Tour } from 'models/Tour';
import {
  GET_TOURS_REQUEST,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILURE,
  GET_CURRENT_TOUR_REQUEST,
  GET_CURRENT_TOUR_SUCCESS,
  GET_CURRENT_TOUR_FAILURE,
  GET_FILTER_TEXT,
  TourActionTypes,
} from './tourTypes';

export interface TourState {
  readonly allTours: Tour[];
  readonly currentTour: null | Tour;
  readonly filter: {
    text: string;
  };
  readonly isLoading: boolean;
  readonly error: null | string;
}

const initialState: TourState = {
  allTours: [],
  currentTour: null,
  filter: {
    text: '',
  },
  isLoading: false,
  error: null,
};

export default (state = initialState, action: TourActionTypes): TourState => {
  switch (action.type) {
    case GET_TOURS_REQUEST:
    case GET_CURRENT_TOUR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        allTours: action.payload,
        isLoading: false,
      };
    case GET_CURRENT_TOUR_SUCCESS:
      return {
        ...state,
        currentTour: action.payload,
        isLoading: false,
      };
    case GET_TOURS_FAILURE:
    case GET_CURRENT_TOUR_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_FILTER_TEXT:
      return {
        ...state,
        filter: { ...state.filter, text: action.payload },
      };
    default:
      return state;
  }
};
