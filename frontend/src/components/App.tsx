import React, { Suspense } from 'react';
import { useAuth } from '../context/auth';
import Spinner from './atoms/Spinner';
import Layout from './templates/Layout';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Layout wide={isAuthenticated()}>
      <Suspense fallback={<Spinner />}>
        {isAuthenticated() ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </Layout>
  );
};

export default App;
