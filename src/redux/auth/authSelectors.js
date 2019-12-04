const isAuthenticated = state => state.auth.token;

const getName = state => state.auth.user.name;

export default { isAuthenticated, getName };
