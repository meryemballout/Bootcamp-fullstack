import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register, logout } from '../redux/actions/authActions';

export default function Auth() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [form, setForm] = useState({ username: '', password: '' });
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const onChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if(isRegister) {
      dispatch(register(form.username, form.password))
        .then(() => {
          setMessage('Inscription réussie. Connectez-vous.');
          setIsRegister(false);
          setLoading(false);
        })
        .catch(err => {
          setMessage(err);
          setLoading(false);
        });
    } else {
      dispatch(login(form.username, form.password))
        .then(() => setLoading(false))
        .catch(err => {
          setMessage(err);
          setLoading(false);
        });
    }
  };

  if(auth.isAuthenticated) {
    return (
      <div>
        <h2>Bienvenue {auth.user}</h2>
        <button onClick={() => dispatch(logout())}>Déconnexion</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{isRegister ? 'Inscription' : 'Connexion'}</h2>
      {message && <p style={{color: 'red'}}>{message}</p>}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Nom d'utilisateur"
          value={form.username}
          onChange={onChange}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={onChange}
          required
        /><br/>
        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : (isRegister ? 'S\'inscrire' : 'Se connecter')}
        </button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? 'Vous avez déjà un compte ? Connectez-vous' : 'Pas de compte ? Inscrivez-vous'}
      </button>
    </div>
  );
}
