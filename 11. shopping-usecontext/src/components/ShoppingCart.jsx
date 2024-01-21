import React from 'react';

import item from './item';
import { useCart } from './ShoppingCartContext';

const ShoppingCart = () => {
  const { state, dispatch } = useCart();

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>

      <h3>Product List</h3>
      <ul>
        {item.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
