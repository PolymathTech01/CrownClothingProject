import { createAction } from '../../Utils/Reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export const setCategoryMap = (categoryMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap);
