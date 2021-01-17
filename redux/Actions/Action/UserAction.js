import API from '../../../helper/EndPoints';
import * as actionTypes from '../ActionTypes';

export const UserActions = (name) => async (dispatch, getState) => {
  const reduxState = getState();
  console.log('====reduxState====', reduxState);
  return dispatch(actionTypes.userClickData(name));
};

export const UserDataActions = () => async (dispatch, getState, api) => {
  dispatch(actionTypes.userDataInit());
  return api
    .get(API.users)
    .then((res) => {
      dispatch(actionTypes.userDataSuccess(res.data));
    })
    .catch((error) => {
      dispatch(actionTypes.userDataFailled(error));
    });
};
