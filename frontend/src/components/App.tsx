import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const user = false;

const App = () => (user ? <AuthenticatedApp /> : <UnauthenticatedApp />);

export default App;
