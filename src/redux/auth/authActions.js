import authActionTypes from './authActionTypes';

const registerStart = () => ({
  type: authActionTypes.REGISTER_START,
});

const registerSuccess = ({ user, token }) => ({
  type: authActionTypes.REGISTER_SUCCESS,
  payload: { user, token },
});

const registerFailure = error => ({
  type: authActionTypes.REGISTER_FAILURE,
  payload: { error },
});

const loginStart = () => ({
  type: authActionTypes.LOGIN_START,
});

const loginSuccess = ({ user, token }) => ({
  type: authActionTypes.LOGIN_SUCCESS,
  payload: { user, token },
});

const loginFailure = error => ({
  type: authActionTypes.LOGIN_FAILURE,
  payload: { error },
});

const logoutStart = () => ({
  type: authActionTypes.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: authActionTypes.LOGOUT_SUCCESS,
});

const logoutFailure = error => ({
  type: authActionTypes.LOGOUT_FAILURE,
  payload: { error },
});

export default {
  registerStart,
  registerSuccess,
  registerFailure,
  logoutStart,
  logoutSuccess,
  logoutFailure,
  loginStart,
  loginSuccess,
  loginFailure,
};
