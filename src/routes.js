import { lazy } from 'react';

// import Loadable from 'react-loadable';
// import Spinner from './common/Spinner';
// import HomeView from './views/HomeView/HomeView';
// import RegisterView from './views/RegisterView/RegisterView';
// import LoginView from './views/LoginView/LoginView';
// import TasksView from './views/TasksView/TasksView';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
);
const TasksView = lazy(() =>
  import('./views/TasksView/TasksView' /* webpackChunkName: "tasks-view" */),
);

// const HomeView = Loadable({
//   loader: () =>
//     import('./views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
//   loading: Spinner,
// });

// const RegisterView = Loadable({
//   loader: () =>
//     import(
//       './views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
//     ),
//   loading: Spinner,
// });

// const LoginView = Loadable({
//   loader: () =>
//     import('./views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
//   loading: Spinner,
// });

// const TasksView = Loadable({
//   loader: () =>
//     import('./views/TasksView/TasksView' /* webpackChunkName: "tasks-view" */),
//   loading: Spinner,
// });

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
