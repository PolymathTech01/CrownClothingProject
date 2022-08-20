import Categories from '../../components/categories/Categories.component';
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
