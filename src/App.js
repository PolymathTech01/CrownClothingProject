import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home.components';
import Navigation from './routes/Navigation/Navigation.components';
import Authentication from './routes/Authentication/Authentication.component';
import Shop from './routes/Shop/Shop.component';
import Checkout from './routes/Checkout/Checkout.component';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './Utils/Firebase/Firebase.utils';
import { setCurrentUser } from './Store/User/user.action';
import { USER_TYPES } from './Store/User/user.types';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch({ type: USER_TYPES.SET_CURRENT_USER, payload: user });
    });

    return unsubcribe;
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
