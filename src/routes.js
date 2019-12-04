import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import TasksView from './views/TasksView/TasksView';

export default {
  HOME: {
    path: '/',
    exact: true,
    component: HomeView,
  },
  REGISTER: {
    path: '/register',
    component: RegisterView,
  },
  LOGIN: {
    path: '/login',
    component: LoginView,
  },
  TASKS: {
    path: '/tasks',
    component: TasksView,
  },
};
