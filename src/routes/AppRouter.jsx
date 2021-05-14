import React, { useContext } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';

import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/auth/LoginScreen';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
  const { user: { logged } } = useContext(AuthContext);

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <PrivateRoute isAuthenticated={logged} path="/" component={DashboardRouter} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
