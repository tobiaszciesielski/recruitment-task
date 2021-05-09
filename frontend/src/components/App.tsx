import React, { Suspense } from 'react';
import Spinner from './atoms/Indicator';
import Layout from './templates/Layout';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const user = false;

const App = () => (
  <Layout>
    <Suspense fallback={<Spinner />}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  </Layout>
);

export default App;
