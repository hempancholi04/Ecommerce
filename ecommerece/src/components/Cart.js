import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemove = productId => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const handleAdjustQuantity = (productId, quantity) => {
    dispatch({ type: 'ADJUST_QUANTITY', payload: { productId, quantity } });
  };
console.log("cart",cart);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            {/* <p>{item.description}</p> */}
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={e => handleAdjustQuantity(item.productId, e.target.value)}
            />
            <button onClick={() => handleRemove(item.productId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
