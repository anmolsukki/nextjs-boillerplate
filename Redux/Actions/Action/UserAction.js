import axios from 'axios';
import * as actionTypes from '../ActionTypes/ActonTypes';
import { getHeaders } from '../Header/AuthHeader';

export const UserAction = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  return async (dispatch) => {
    dispatch(actionTypes.USER_DATA_INIT());
    return axios
      .get(url, { headers: await getHeaders(false) })
      .then((res) => {
        dispatch(actionTypes.USER_DATA_SUCCESS(res.data));
      })
      .catch((error) => {
        dispatch(actionTypes.USER_DATA_ERROR(error));
      });
  };
};
