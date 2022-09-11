import Categories from '../../components/Categories/Categories.component';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Outlet />
      <Categories />
    </div>
  );
};
export default Home;
