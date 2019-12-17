import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Counter from './Counter';
import SignupForm from './SignupForm';
import Clock from './Clock';
import News from './News';
import Profile from './Profile';
import Todos from './Todos';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>

        <Route path="/signup">
          <SignupForm />
        </Route>

        <Route path="/clock">
          <Clock />
        </Route>

        <Route path="/news">
          <News />
        </Route>

        <Route path="/context">
          <Profile />
        </Route>

        <Route path="/todos">
          <Todos />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
