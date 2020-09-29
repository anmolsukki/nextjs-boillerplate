import * as actionConstant from '../ActionConstant';

export const userClickData = (name) => ({ type: actionConstant.USER_DATA, name });

export const userDataInit = () => ({ type: actionConstant.GET_USER_DATA_INIT });
export const userDataSuccess = (data) => ({ type: actionConstant.GET_USER_DATA_SUCCESS, data });
export const userDataFailled = (data) => ({ type: actionConstant.GET_USER_DATA_ERROR, data });
