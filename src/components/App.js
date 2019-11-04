import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import ShowsPage from '../pages/ShowsPage';
import ShowDetailsPage from '../pages/ShowDetailsPage';
import routes from '../routes';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route path={routes.SHOW_DETAILS} component={ShowDetailsPage} />
        <Route path={routes.SHOWS} component={ShowsPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
