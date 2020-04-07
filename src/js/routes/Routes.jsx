import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './helpers';
import { MainLayout } from 'js/views/layout';

import Login from 'js/views/login';
import Dashboard from 'js/views/dashboard/home';
import Statistics from 'js/views/dashboard/statistics';
import Settings from 'js/views/dashboard/settings';

export default () => (
  <Switch>
    <Route path={['/', '/login']} exact>
      <Login />
    </Route>

    <PrivateRoute path="/dashboard/:path?" exact>
      <MainLayout>
        <Switch>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/dashboard/settings">
            <Settings />
          </Route>
          <Route path="/dashboard/statistics">
            <Statistics />
          </Route>
        </Switch>
      </MainLayout>
    </PrivateRoute>
  </Switch>
);
