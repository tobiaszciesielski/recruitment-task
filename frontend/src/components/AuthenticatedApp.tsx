import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Dashboard from './molecules/Dashboard';
import Profile from './molecules/Profile';

const AuthenticatedApp = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/profile" component={Profile} />
    <Redirect from="*" to="/dashboard" />
  </Switch>
);

export default AuthenticatedApp;
