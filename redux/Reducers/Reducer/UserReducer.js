import * as actionConstant from '../../Actions/ActionConstant';

const initialState = {
  users: '',
  userArr: []
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.USER_DATA:
      return {
        ...state,
        users: action.name
      };

    case actionConstant.GET_USER_DATA_INIT:
      return {
        ...state
      };
    case actionConstant.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userArr: action.data
      };
    case actionConstant.GET_USER_DATA_ERROR:
      return {
        ...state,
        userArr: action.data
      };
    default:
      return state;
  }
};
