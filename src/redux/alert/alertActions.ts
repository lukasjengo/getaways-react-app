import uuid from 'uuid';
import { Dispatch } from 'redux';

import { SET_ALERT, REMOVE_ALERT, AlertActionTypes } from './alertTypes';

export const setAlert = (
  msg: string,
  alertType: 'danger' | 'success',
  timeout = 5000
) => (dispatch: Dispatch<AlertActionTypes>) => {
  const id = uuid.v4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      }),
    timeout
  );
};
