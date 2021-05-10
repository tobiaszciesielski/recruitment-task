import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Dashboard from './molecules/Dashboard';

const AuthenticatedApp = () => (
  <Switch>
    <Route exact path="/dashboard" component={Dashboard} />
    <Redirect from="*" to="/dashboard" />
  </Switch>
);

export default AuthenticatedApp;
