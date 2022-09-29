import { combineReducers } from 'redux';
import { categoriesReducer } from './Categories/category.reducers';
import { userReducer } from './User/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
