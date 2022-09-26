import { createContext, useReducer, useEffect } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../Utils/Firebase/Firebase.utils';
import { createAction } from '../Utils/Reducer/reducer.utils';

// The acutal value that want to be accesssed from the outside
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};
const userReducer = (state, action) => {
  const { type, payload } = action;
  console.log('dispatched');
  console.log('action', action);
  switch (type) {
    case USER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};
// The acutal component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  console.log('current user', currentUser);
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_TYPES.SET_CURRENT_USER, user));
  };
  const value = { currentUser, setCurrentUser };
  // signOutUser();

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
