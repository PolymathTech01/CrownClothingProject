import Home from './routes/Home/Home.components';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation.components';
import SignIn from './routes/Sign-in/Sign-in.component';

const Shop = () => {
  return <h1>This is the shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
