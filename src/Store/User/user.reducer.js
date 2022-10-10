import { USER_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  // console.log('action', action);
  switch (type) {
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
