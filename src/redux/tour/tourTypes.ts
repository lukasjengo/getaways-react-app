import { Action } from 'redux';
import { Tour } from 'models/Tour';

export const GET_TOURS_REQUEST = 'GET_TOURS_REQUEST';
export const GET_TOURS_SUCCESS = 'GET_TOURS_SUCCESS';
export const GET_TOURS_FAILURE = 'GET_TOURS_FAILURE';
export const GET_CURRENT_TOUR_REQUEST = 'GET_CURRENT_TOUR_REQUEST';
export const GET_CURRENT_TOUR_SUCCESS = 'GET_CURRENT_TOUR_SUCCESS';
export const GET_CURRENT_TOUR_FAILURE = 'GET_CURRENT_TOUR_FAILURE';
export const GET_FILTER_TEXT = 'GET_FILTER_TEXT';

export interface GetToursRequestAction
  extends Action<typeof GET_TOURS_REQUEST> {}

export interface GetToursSuccessAction
  extends Action<typeof GET_TOURS_SUCCESS> {
  payload: Tour[];
}

export interface GetToursFailureAction
  extends Action<typeof GET_TOURS_FAILURE> {
  payload: string;
}

export interface GetCurrentTourRequestAction
  extends Action<typeof GET_CURRENT_TOUR_REQUEST> {}

export interface GetCurrentTourSuccessAction
  extends Action<typeof GET_CURRENT_TOUR_SUCCESS> {
  payload: Tour;
}

export interface GetCurrentTourFailureAction
  extends Action<typeof GET_CURRENT_TOUR_FAILURE> {
  payload: string;
}

export interface GetFilterTextAction extends Action<typeof GET_FILTER_TEXT> {
  payload: string;
}

export type TourActionTypes =
  | GetToursRequestAction
  | GetToursSuccessAction
  | GetToursFailureAction
  | GetCurrentTourRequestAction
  | GetCurrentTourSuccessAction
  | GetCurrentTourFailureAction
  | GetFilterTextAction;
