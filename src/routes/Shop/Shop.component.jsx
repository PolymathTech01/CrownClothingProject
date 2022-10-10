import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setCategories } from '../../Store/Categories/category.action';
import { getCategoriesAndDocuments } from '../../Utils/Firebase/Firebase.utils';
import CategoriesPreview from '../Categories-preview/Categories-preview.component';
import Category from '../Category/Category.component';
import './shop.styles.scss';
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
      {/* {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
        // return (
        //   <Fragment key={title}>
        //     <h2>{title}</h2>
        //     <div className='product-container'>
        //       {categoryMap[title].map((product) => (
        //         <CategoryPreview key={product.id} product={product} />
        //       ))}
        //       shop
        //     </div>
        //   </Fragment>
        // );
      })} */}
    </Routes>
  );
};

export default Shop;
