import { ActionCreator } from 'redux';

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

export const getToursRequest: ActionCreator<TourActionTypes> = () => ({
  type: GET_TOURS_REQUEST
});

export const getToursSuccess: ActionCreator<TourActionTypes> = (
  tours: Tour[]
) => ({
  type: GET_TOURS_SUCCESS,
  payload: tours
});

export const getToursFailure: ActionCreator<TourActionTypes> = (
  error: string
) => ({
  type: GET_TOURS_FAILURE,
  payload: error
});

export const getCurrentTourRequest: ActionCreator<TourActionTypes> = (
  id: string
) => ({
  type: GET_CURRENT_TOUR_REQUEST,
  payload: id
});

export const getCurrentTourSuccess: ActionCreator<TourActionTypes> = (
  tour: Tour
) => ({
  type: GET_CURRENT_TOUR_SUCCESS,
  payload: tour
});

export const getCurrentTourFailure: ActionCreator<TourActionTypes> = (
  error: string
) => ({
  type: GET_CURRENT_TOUR_FAILURE,
  payload: error
});

export const getFilterText: ActionCreator<TourActionTypes> = (
  text: string
) => ({
  type: GET_FILTER_TEXT,
  payload: text.toLowerCase()
});
