import * as actionTypes from '../../Actions/ActionConstant';

const initialState = {
  users: ''
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.USER_DATA:
      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
};
