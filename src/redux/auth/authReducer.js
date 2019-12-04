import { combineReducers } from 'redux';
import authActionTypes from './authActionTypes';

const user = (state = { name: null, email: null }, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
    case authActionTypes.LOGIN_SUCCESS:
    case authActionTypes.GET_CURRENT_SUCCESS:
      return payload.user;

    case authActionTypes.LOGOUT_SUCCESS:
      return { name: null, email: null };

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
    case authActionTypes.LOGIN_SUCCESS:
      return payload.token;

    case authActionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_FAILURE:
    case authActionTypes.LOGIN_FAILURE:
    case authActionTypes.LOGOUT_FAILURE:
    case authActionTypes.GET_CURRENT_FAILURE:
      return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
});
