import * as actionTypes from '../ActionConstant';

export const UserActions = (name) => async (dispatch, getState) => {
  const reduxState = getState();
  console.log('====reduxState====', reduxState);
  return dispatch({ type: actionTypes.USER_DATA, payload: name });
};
