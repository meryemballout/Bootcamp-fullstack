import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, changeQuantity } from '../features/cart/cartSlice';

function ShoppingCart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.title} - {item.quantity} x ${item.price}</p>
          <input type="number" min="1" value={item.quantity} onChange={(e) =>
            dispatch(changeQuantity({ id: item.id, quantity: +e.target.value }))
          } />
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default ShoppingCart;
