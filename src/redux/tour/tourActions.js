import axios from 'axios';

import {
  GET_TOURS_REQUEST,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAILURE,
  GET_FILTER_TEXT
} from './tourTypes';

export const getTours = () => async dispatch => {
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

export const getFilterText = text => dispatch => {
  dispatch({ type: GET_FILTER_TEXT, payload: text.toLowerCase() });
};
