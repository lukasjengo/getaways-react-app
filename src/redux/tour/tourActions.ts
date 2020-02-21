import {
  GET_TOURS_REQUEST,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILURE,
  GET_CURRENT_TOUR_REQUEST,
  GET_CURRENT_TOUR_SUCCESS,
  GET_CURRENT_TOUR_FAILURE,
  GET_FILTER_TEXT,
  TourActionTypes
} from './tourTypes';

import { Tour } from 'models/Tour';

export const getToursRequest = (): TourActionTypes => ({
  type: GET_TOURS_REQUEST
});

export const getToursSuccess = (tours: Tour[]): TourActionTypes => ({
  type: GET_TOURS_SUCCESS,
  payload: tours
});

export const getToursFailure = (error: string): TourActionTypes => ({
  type: GET_TOURS_FAILURE,
  payload: error
});

export const getCurrentTourRequest = (id: string): TourActionTypes => ({
  type: GET_CURRENT_TOUR_REQUEST,
  payload: id
});

export const getCurrentTourSuccess = (tour: Tour): TourActionTypes => ({
  type: GET_CURRENT_TOUR_SUCCESS,
  payload: tour
});

export const getCurrentTourFailure = (error: string): TourActionTypes => ({
  type: GET_CURRENT_TOUR_FAILURE,
  payload: error
});

export const getFilterText = (text: string): TourActionTypes => ({
  type: GET_FILTER_TEXT,
  payload: text.toLowerCase()
});
