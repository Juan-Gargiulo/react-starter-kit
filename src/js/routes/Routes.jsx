import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './helpers';
import { MainLayout } from 'js/views/layout';

import Login from 'js/views/login';
import Statistics from 'js/views/statistics';

export default () => (
  <Router>
    <Switch>
      <Route path={['/', '/login']} exact>
        <Login />
      </Route>

      <PrivateRoute path="/dashboard/:path?" exact>
        <MainLayout>
          <Switch>
            <Route path="/dashboard/statistics">
              <Statistics />
            </Route>
          </Switch>
        </MainLayout>
      </PrivateRoute>
    </Switch>
  </Router>
);
