import React, { Suspense } from 'react';
import { useAuth } from '../context/auth';
import Spinner from './atoms/Spinner';
import Layout from './templates/Layout';

const AuthenticatedApp = React.lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = React.lazy(() => import('./UnauthenticatedApp'));

const App = () => {
  const { user, token } = useAuth();
  console.log(user, token);
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Suspense>
    </Layout>
  );
};

export default App;
