import { useContext } from 'react';
import { ProductContext } from '../../contexts/products.context';
import Product from '../../components/Product-card/Product-card.component';
import './shop.styles.scss';
const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
