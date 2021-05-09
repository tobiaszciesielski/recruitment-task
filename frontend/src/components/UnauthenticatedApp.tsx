import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import SignIn from './organisms/SignIn';
import SignUp from './organisms/SignUp';

const UnauthenticatedApp = () => (
  <Switch>
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/" component={SignIn} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default UnauthenticatedApp;
