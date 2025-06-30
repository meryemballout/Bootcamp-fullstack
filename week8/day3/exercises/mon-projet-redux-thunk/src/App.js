// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserData from './components/UserData';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserData />
      </div>
    </Provider>
  );
}
