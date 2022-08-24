import Home from './routes/Home/Home.components';
import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation.components';
import Authentication from './routes/Authentication/Authentication.component';
import Shop from './routes/Shop/Shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
