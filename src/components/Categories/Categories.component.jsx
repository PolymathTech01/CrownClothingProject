import CategoryItem from '../Category-item/Category-item.component';
import { categories } from './categories';
import { CategoriesContainer } from './categories.styles.jsx';

const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};

export default Categories;
