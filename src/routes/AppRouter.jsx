import React, { useContext } from 'react';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
            <PublicRoute isAuthenticated={logged} exact path="/login" component={LoginScreen} />
            <PrivateRoute isAuthenticated={logged} path="/" component={DashboardRouter} />
          </Switch>
        </div>
      </Router>
    </>
  );
};
