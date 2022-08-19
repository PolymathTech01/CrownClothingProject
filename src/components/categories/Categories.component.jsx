import CategoryItem from '../category-item/Category-item.component';
import { categories } from './categories';
import './categories.styles.scss';

const Categories = () => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
