import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch(action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        error: 'Erreur lors de l\'inscription',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.username,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error: 'Connexion échouée',
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
