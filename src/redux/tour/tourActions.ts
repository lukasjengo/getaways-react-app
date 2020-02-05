import axios from 'axios';

import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Tour } from 'models/Tour';

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

export const getTours: ActionCreator<ThunkAction<
  Promise<void>,
  Tour[] | string,
  null,
  TourActionTypes
>> = () => async (dispatch: Dispatch<TourActionTypes>) => {
  dispatch({ type: GET_TOURS_REQUEST });
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tours`);
    const data = res.data.data.data;
    dispatch({
      type: GET_TOURS_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: GET_TOURS_FAILURE,
      payload: err.response.data.message
    });
  }
};

export const getCurrentTour: ActionCreator<ThunkAction<
  Promise<void>,
  Tour | string,
  string,
  TourActionTypes
>> = id => async (dispatch: Dispatch<TourActionTypes>) => {
  dispatch({ type: GET_CURRENT_TOUR_REQUEST });
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/tours/${id}`);
    const data = res.data.data.data;
    dispatch({
      type: GET_CURRENT_TOUR_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: GET_CURRENT_TOUR_FAILURE,
      payload: err.response.data.message
    });
  }
};

export const getFilterText = (text: string): TourActionTypes => ({
  type: GET_FILTER_TEXT,
  payload: text.toLowerCase()
});
