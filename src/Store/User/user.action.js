import { createAction } from '../../Utils/Reducer/reducer.utils';
import { USER_TYPES } from './user.types';

export const setCurrentUser = (user) => {
  createAction(USER_TYPES.SET_CURRENT_USER, user);
};
