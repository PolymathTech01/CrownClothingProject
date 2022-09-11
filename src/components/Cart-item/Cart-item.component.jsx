import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
} from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails className='item-details'>
        <CartItemName className='name'>{name}</CartItemName>
        <span className='price'>
          {quantity} * ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
