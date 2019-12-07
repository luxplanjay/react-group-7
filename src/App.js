import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import Layout from './common/Layout';
import routes from './routes';
import authOperations from './redux/auth/authOperations';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact={routes.HOME.exact}
              path={routes.HOME.path}
              component={routes.HOME.component}
            />
            <Route
              path={routes.REGISTER.path}
              component={routes.REGISTER.component}
            />
            <Route
              path={routes.LOGIN.path}
              component={routes.LOGIN.component}
            />
            <PrivateRoute
              path={routes.TASKS.path}
              component={routes.TASKS.component}
            />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
