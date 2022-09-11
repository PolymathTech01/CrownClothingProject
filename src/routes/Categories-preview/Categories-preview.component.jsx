import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/Category-preview/Category-preview.component';
const CategoriesPreview = () => {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
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
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
