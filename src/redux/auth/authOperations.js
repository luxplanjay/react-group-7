import authActions from './authActions';

const registerUser = credentials => dispatch => {
  dispatch(authActions.registerStart());

  fetch('http://localhost:1234/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(res => res.json())
    .then(data => dispatch(authActions.registerSuccess(data)))
    .catch(error => dispatch(authActions.registerFailure(error)));
};

const logoutUser = () => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;

  dispatch(authActions.logoutStart());

  fetch('http://localhost:1234/users/logout', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.json())
    .then(() => dispatch(authActions.logoutSuccess()))
    .catch(error => dispatch(authActions.logoutFailure(error)));
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  fetch('http://localhost:1234/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(res => res.json())
    .then(data => dispatch(authActions.loginSuccess(data)))
    .catch(error => dispatch(authActions.loginFailure(error)));
};

export default { registerUser, logoutUser, loginUser };
