import { createContext, useEffect, useState, useReducer } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  // if found increment the quantity, else add the productToAdd to the cartitems
  // return the new array with modified cartItems(increment)/ new cart item(addition)
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  console.log('existing item', existingCartItems);
  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id // if cartItem is the same as the one i want to add
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  // if found, check of the quantity is 1, then remove from cart

  if (existingCartItems.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // else decrease item quantity by 1
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id // if cartItem is the same as the one i want to remove
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});
const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItems: [],
  isCartOpen: false,
};
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_NEW_CART_INFO':
      return {
        ...state,
        ...payload,
      };
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload,
      };

    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartCount, cartTotal, cartItems, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: 'SET_NEW_CART_INFO',
      payload: {
        cartTotal: newCartTotal,
        cartItems: newCartItems,
        cartcount: newCartCount,
      },
    });

    /**
     * I need to generate;
     *    newCartTotal
     *    newCartCount
     *
     * dispatch new action with payload = {
     * newCartItems,
     * newCartTotal,
     * newCartCount
     * }
     */
  };
  const addItemsToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItems(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItems(newCartItems);
  };
  const setIsCartOpen = (bool) => {
    dispatch({ type: 'SET_IS_CART_OPEN', payload: bool });
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
