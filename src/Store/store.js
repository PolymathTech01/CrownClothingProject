import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './root-reducer';
const INITIAL_STATE = {
  currentUser: null,
};
const middleWares = [thunk];
// const middleWareLogger = [logger];
// const composingLogger = compose(applyMiddleware(...middleWareLogger));
const composeEnhancers = composeWithDevTools(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composeEnhancers);
