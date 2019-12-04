import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

const registerUser = credentials => dispatch => {
  dispatch(authActions.registerStart());

  axios
    .post('/users/signup', credentials)
    .then(response => {
      setToken(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerFailure(error)));
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  axios
    .post('/users/login', credentials)
    .then(response => {
      setToken(response.data.token);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch(error => dispatch(authActions.loginFailure(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;

  if (!token) {
    return;
  }

  setToken(token);
  dispatch(authActions.getCurrentStart());

  axios
    .get('/users/current')
    .then(response => dispatch(authActions.getCurrentSuccess(response.data)))
    .catch(error => authActions.getCurrentFailure(error));
};

const logoutUser = () => dispatch => {
  dispatch(authActions.logoutStart());

  axios
    .post('/users/logout')
    .then(() => {
      unsetToken();
      dispatch(authActions.logoutSuccess());
    })
    .catch(error => dispatch(authActions.logoutFailure(error)));
};

export default { registerUser, logoutUser, loginUser, getCurrentUser };
