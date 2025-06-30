import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productThunks';
import { addToCart } from '../features/cart/cartSlice';

function ProductListing() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Products</h2>
      {items.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
