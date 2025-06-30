import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/auth/authSlice';

function AuthForm() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          <button onClick={() => dispatch(login(username))}>Login</button>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
