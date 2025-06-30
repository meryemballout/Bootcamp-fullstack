import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>E-commerce Platform</h1>
        <AuthForm />
        <ProductListing />
        <ShoppingCart />
      </div>
    </Provider>
  );
}

export default App;
