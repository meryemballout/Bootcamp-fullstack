// Types d'actions
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

// Actions (avec thunk)
export const register = (username, password) => dispatch => {
  // Simule un appel API avec une promesse
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username && password) {
        dispatch({ type: REGISTER_SUCCESS, payload: { username } });
        resolve();
      } else {
        dispatch({ type: REGISTER_FAIL });
        reject('Erreur d\'inscription');
      }
    }, 1000);
  });
};

export const login = (username, password) => dispatch => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Ici tu peux faire une simple validation "mock"
      if(username === 'user' && password === 'password') {
        dispatch({ type: LOGIN_SUCCESS, payload: { username, token: 'token123' } });
        resolve();
      } else {
        dispatch({ type: LOGIN_FAIL });
        reject('Nom d\'utilisateur ou mot de passe invalide');
      }
    }, 1000);
  });
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
