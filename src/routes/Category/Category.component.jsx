import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Product from '../../components/Product-card/Product-card.component';
import { selectCategoriesMap } from '../../Store/Categories/category.selector';
import { CategoryTitle, CategoryContainers } from './category.styles.jsx';

const Category = () => {
  const { category } = useParams();
  console.log('render/re-rendering category component...');
  const categoryMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoryMap[category]);
  useEffect(() => {
    console.log('effect fired calling setProducts...');
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
