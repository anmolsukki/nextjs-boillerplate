import axios from 'axios';
import getConfig from 'next/config';
import API from '../../../utils/EndPoints';
import * as actionTypes from '../ActionTypes';

const { publicRuntimeConfig } = getConfig();

export const UserActions = (name) => async (dispatch, getState) => {
  const reduxState = getState();
  console.log('====reduxState====', reduxState);
  return dispatch(actionTypes.userClickData(name));
};

export const UserDataActions = () => async (dispatch) => {
  dispatch(actionTypes.userDataInit());
  const url = publicRuntimeConfig.baseUrl + API.userPost;
  return axios
    .get(url)
    .then((res) => {
      dispatch(actionTypes.userDataSuccess(res.data));
    })
    .catch((error) => {
      dispatch(actionTypes.userDataFailled(error));
    });
};
