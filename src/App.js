import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import routes from './routes';

const styles = {
  activeLink: {
    color: 'palevioletred',
  },
};

const App = () => (
  <div>
    <BrowserRouter>
      <nav>
        <NavLink to={routes.REGISTER.path} activeStyle={styles.activeLink}>
          Register
        </NavLink>
        <NavLink to={routes.LOGIN.path} activeStyle={styles.activeLink}>
          Login
        </NavLink>
        <NavLink to={routes.LOGOUT.path} activeStyle={styles.activeLink}>
          Logout
        </NavLink>
      </nav>

      <Switch>
        <Route
          path={routes.REGISTER.path}
          component={routes.REGISTER.component}
        />
        <Route path={routes.LOGIN.path} component={routes.LOGIN.component} />
        <Route path={routes.LOGOUT.path} component={routes.LOGOUT.component} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
