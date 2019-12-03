import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import LogoutView from './views/LogoutView/LogoutView';

export default {
  REGISTER: {
    path: '/register',
    component: RegisterView,
  },
  LOGIN: {
    path: '/login',
    component: LoginView,
  },
  LOGOUT: {
    path: '/logout',
    component: LogoutView,
  },
};
