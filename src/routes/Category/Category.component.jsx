import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product-card/Product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { CategoryTitle, CategoryContainers } from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoryMap[category]);
  useEffect(() => {
    setProducts(categoryMap[category]);
  }, [category, categoryMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainers>
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </CategoryContainers>
    </Fragment>
  );
};

export default Category;
