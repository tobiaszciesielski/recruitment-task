import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import Layout from './templates/Layout';

const user = false;

const App = () => (
  <Layout>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</Layout>
);

export default App;
