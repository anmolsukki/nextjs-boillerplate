import axios from 'axios';
import * as actionTypes from '../ActionTypes';

export const UserActions = (name) => async (dispatch, getState) => {
  const reduxState = getState();
  console.log('====reduxState====', reduxState);
  return dispatch(actionTypes.userClickData(name));
};

export const UserDataActions = () => async (dispatch) => {
  dispatch(actionTypes.userDataInit());
  const url = `${process.env.BaseUrl}/users`;
  return axios
    .get(url)
    .then((res) => {
      dispatch(actionTypes.userDataSuccess(res.data));
    })
    .catch((error) => {
      dispatch(actionTypes.userDataFailled(error));
    });
};
